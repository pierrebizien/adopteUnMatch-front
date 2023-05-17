/**
 * @vitest-environment jsdom
 */
import matchers from "@testing-library/jest-dom/matchers";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Inscription from "./index.tsx";
import { it, describe, expect } from "vitest";

expect.extend(matchers);

describe("Page inscription", () => {
  it("should display an error if login is less than 4 characters", async () => {
    render(<Inscription />);
    await userEvent.type(screen.getByPlaceholderText("Login de la team"), "tot");
    await userEvent.click(screen.getByText("S'inscrire"))

    expect(screen.getByText("Minimum 4 caracteres")).toBeInTheDocument();
  });

  it("should display an error if Login is empty", async () => {
	await userEvent.clear(screen.getByPlaceholderText("Login de la team"));
    await userEvent.type(screen.getByPlaceholderText("Mot de passe"), "toto");
    await userEvent.type(screen.getByPlaceholderText("Nom de la Team"), "toto");
   
    await userEvent.click(screen.getByText("S'inscrire"))
    
    expect(screen.getByText("Champs requis")).toBeInTheDocument();
  });

  it("should display an error if name is empty", async () => {
    await userEvent.clear(screen.getByPlaceholderText("Nom de la Team"));
    await userEvent.type(screen.getByPlaceholderText("Login de la team"), "totototo");
   
    await userEvent.click(screen.getByText("S'inscrire"))
    
    expect(screen.getByText("Champs requis")).toBeInTheDocument();
  });

  it("should display an error if password is empty", async () => {
    await userEvent.clear(screen.getByPlaceholderText("Mot de passe"));
    await userEvent.type(screen.getByPlaceholderText("Nom de la Team"), "totototo");
   
    await userEvent.click(screen.getByText("S'inscrire"))
    
    expect(screen.getByText("Champs requis")).toBeInTheDocument();
  });

  it("should display an error if space in login", async () => {
    await userEvent.clear(screen.getByPlaceholderText("Login de la team"));
    await userEvent.type(screen.getByPlaceholderText("Nom de la Team"), "totototo");
    await userEvent.type(screen.getByPlaceholderText("Mot de passe"), "totototo");
    await userEvent.type(screen.getByPlaceholderText("Login de la team"), "tot ototo");
   
    await userEvent.click(screen.getByText("S'inscrire"))
    
    expect(screen.getByText("Que des chiffres, lettres ou underscore")).toBeInTheDocument();
  });

  it("should display an error if space in password", async () => {
    await userEvent.clear(screen.getByPlaceholderText("Login de la team"));
    await userEvent.type(screen.getByPlaceholderText("Nom de la Team"), "toto toto");
    await userEvent.type(screen.getByPlaceholderText("Mot de passe"), "totototo");
    await userEvent.type(screen.getByPlaceholderText("Login de la team"), "totototo");
   
    await userEvent.click(screen.getByText("S'inscrire"))
    
    expect(screen.getByText("Que des chiffres, lettres ou underscore")).toBeInTheDocument();
  });
});

// test("lgoads and displays greetin", async () => {
//   // ARRANGE
//   render(<Connexion />);

//   // ACT
//   await userEvent.click(screen.getByText("Load Greeting"));
//   await screen.findByRole("heading");

//   // ASSERT
//   expect(screen.getByRole("heading")).toHaveTextContent("hello there");
//   expect(screen.getByRole("button")).toBeDisabled();
// });
