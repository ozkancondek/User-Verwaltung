import { createContext, useContext } from "react";
import { useErrorHandler } from "react-error-boundary";
import { initialServices } from "../services/api";

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const handleError = useErrorHandler();

  const asyncWrapper = async (cb) => {
    try {
      let res = await cb();
      return res;
    } catch (error) {
      handleError(error);
    }
  };

  const getAllUsers = async () => {
    let res = await asyncWrapper(() => initialServices.fetchData());
    return res;
  };
  const getSingleUser = async (id) => {
    let res = await asyncWrapper(() => initialServices.fetchSingleData(id));
    return res;
  };
  const addNewUser = async (data) => {
    let res = await asyncWrapper(() => initialServices.postData(data));
    return res;
  };
  const deleteUser = async (id) => {
    let res = await asyncWrapper(() => initialServices.deleteData(id));
    return res;
  };
  const updateUser = async (id, data) => {
    let res = await asyncWrapper(() => initialServices.updateData(id, data));
    return res;
  };

  return (
    <ApiContext.Provider
      value={{
        getAllUsers,
        getSingleUser,
        addNewUser,
        deleteUser,
        updateUser,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export const useApi = () => {
  const response = useContext(ApiContext);
  if (!response) {
    throw new Error("useApi need to used in ApiProvider");
  }
  return response;
};
