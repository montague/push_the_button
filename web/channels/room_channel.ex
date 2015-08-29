defmodule PushTheButton.RoomChannel do
  use Phoenix.Channel

  def join("rooms:lobby", auth_msg, socket) do
    {:ok, socket}
  end

  def join("rooms:" <> _, _auth_msg, socket) do
    {:error, %{reason: "unauthorized"}}
  end
end
