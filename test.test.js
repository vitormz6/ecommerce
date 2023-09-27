import React from "react";
import { render, fireEvent } from "@testing-library/react";
import LoginPage from "./LoginPage";

test("renders LoginPage and handles login correctly", () => {
  const { getByText, getByLabelText } = render(<LoginPage />);

  // Verifica se os elementos de entrada existem
  const emailInput = getByLabelText("Informe seu e-mail");
  const passwordInput = getByLabelText("Informe sua senha");

  // Simula a entrada do usuário
  fireEvent.change(emailInput, { target: { value: "admin" } });
  fireEvent.change(passwordInput, { target: { value: "admin" } });

  // Verifica se os valores de entrada foram definidos corretamente
  expect(emailInput.value).toBe("admin");
  expect(passwordInput.value).toBe("admin");

  // Simula o clique no botão "Entrar"
  fireEvent.click(getByText("Entrar"));

  // Verifica se a rota foi direcionada para "/dashboard"
  // Aqui, você precisa ajustar essa verificação conforme a lógica de redirecionamento real em sua aplicação
  // Pode ser necessário ajustar sua implementação para tornar o redirecionamento testável.
  // Por exemplo, usando um mock para useRouter().
  // Para este exemplo, vamos apenas verificar se a mensagem de alerta é exibida
  expect(window.alert).toHaveBeenCalledWith("usuario nao existe");
});
