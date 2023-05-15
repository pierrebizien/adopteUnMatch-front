/**
 * @vitest-environment jsdom
 */
import matchers from "@testing-library/jest-dom/matchers";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Connexion from "./index.tsx";
import { it, describe, expect } from "vitest";

expect.extend(matchers);

describe("Page Connexion", () => {
  it("should display an error if credentials are incorrects", async () => {
    render(<Connexion />);
    await userEvent.type(screen.getByLabelText("login"), "toto");
    await userEvent.click(screen.getByText("Se connecter"))
    
    expect(screen.getByText("Champs requis")).toBeInTheDocument();
  });

  it("should display an error message when password empty", async () => {
    // render(<Connexion />);
    // await userEvent.type(screen.getByLabelText("Password"), "toto");
    // await userEvent.keyboard(screen.getByLabelText("login"), "");
   
    await userEvent.click(screen.getByText("Se connecter"))
    
    //completer
    expect(screen.getByText("Champs requis")).toBeInTheDocument();
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
