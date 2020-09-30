import axios from "axios";
import { fetchData } from "../../httpRequest/fetchData";

jest.mock("axios");

describe("fetchData", () => {
  it("fetches successfully data from an API", async () => {
    const data = {
      data: {
        icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        value: "Chuck Norris survived his execution. His executioners did not.",
      },
    };

    axios.get.mockImplementationOnce(() => Promise.resolve(data));

    await expect(fetchData()).resolves.toEqual(data);

    expect(axios.get).toHaveBeenCalledWith(
      "https://api.chucknorris.io/jokes/random"
    );

    expect(axios.get).toHaveBeenCalledTimes(1);
  });

  it("fetches erroneously data from an API", async () => {
    const errorMessage = "Network Error";

    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage))
    );

    await expect(fetchData("react")).rejects.toThrow(errorMessage);
  });
});
