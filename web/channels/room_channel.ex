defmodule PushTheButton.RoomChannel do
  use Phoenix.Channel

  def join("rooms:lobby", auth_msg, socket) do
    {:ok, socket}
  end

  def join("rooms:" <> _, _auth_msg, socket) do
    {:error, %{reason: "unauthorized"}}
  end

  def handle_in("hit_me!", %{}, socket) do
    body = Enum.reduce(1..10, "", fn i, acc -> "omg" <> acc end)
    push socket, "fuckyou", %{body: body}
    {:noreply, socket}
  end

  def handle_in("in", %{}, socket) do
    broadcast_from! socket, "in", %{}
    {:noreply, socket}
  end

  def handle_in("out", %{}, socket) do
    broadcast_from! socket, "out", %{}
    {:noreply, socket}
  end
end
