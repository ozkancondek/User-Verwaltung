import React from "react";
import { Container } from "../components/styled/Container.styled";
import { TextField } from "../components/styled/TextField.styled";
import { useTheme } from "../providers/ThemeProvider";

export const About = () => {
  const { panel, isDark } = useTheme();

  return (
    <Container
      bg={isDark ? panel.bg.dark : panel.bg.light}
      width="100%"
      height="95vh"
      padding="15px"
      justify="flex-start"
      align="flex-start"
    >
      <TextField
        size="1.8rem"
        color={isDark ? panel.text.secondary : panel.text.tertiary}
      >
        User-Verwaltung Project (Backend + UI)
      </TextField>
      <TextField
        size="1rem"
        color={isDark ? panel.text.secondary : panel.text.primary}
      >
        <>&#x21d2;</>Als Unternehmen möchte ich, dass die Backends meiner
        Services in Java oder NodeJS implementiert sind, um die
        Technologievielfalt in einem vernünftigen Rahmen zu halten.
      </TextField>
      <TextField
        size="1rem"
        color={isDark ? panel.text.secondary : panel.text.primary}
      >
        <>&#x21d2;</>Als Kunde möchte ich, dass User-Datensätze mindestens aus
        Name, Adresse, E-Mail Adresse und Geburtsdatum bestehen, damit alle
        Geschäftsprozesse damit abbildbar sind.
      </TextField>
      <TextField
        size="1rem"
        color={isDark ? panel.text.secondary : panel.text.primary}
      >
        <>&#x21d2;</>Als Kunde möchte ich, dass im UI alle existierenden User
        mit Name, Adresse, E-Mail Adresse und Geburtsdatum auf einer Seite
        einsehbar sind, damit ich einen Überblick über alle existierenden User
        habe.
      </TextField>
      <TextField
        size="1rem"
        color={isDark ? panel.text.secondary : panel.text.primary}
      >
        <>&#x21d2;</> Als Kunde möchte ich, dass im UI über ein Formular neue
        User angelegt werden können, damit ein einfacher Weg zur Erstellung
        neuer User existiert.
      </TextField>
      <TextField
        size="1rem"
        color={isDark ? panel.text.secondary : panel.text.primary}
      >
        <>&#x21d2;</>Als Kunde möchte ich, dass existierende User über das UI
        gelöscht werden können, um schnell auf DSGVO Löschanfragen reagieren zu
        können.
      </TextField>
      <TextField
        size="1rem"
        color={isDark ? panel.text.secondary : panel.text.primary}
      >
        <>&#x21d2;</>Als Team möchte ich, dass die Webanwendung über
        automatisierte Tests verfügt, um Continuous Deployment realisieren zu
        können.
      </TextField>
    </Container>
  );
};
