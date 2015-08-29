defmodule PushTheButton.PageController do
  use PushTheButton.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
