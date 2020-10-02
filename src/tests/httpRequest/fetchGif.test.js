import axios from "axios";
import { fetchGif } from "../../httpRequest/fetchGif";

jest.mock("axios");

describe("fetchGif", () => {
  it("fetches successfully data from an API", async () => {
    const data = {
      data: {
        data: [
          {
            images: {
              fixed_height: {
                url: "https://media2.giphy.com/media/test",
              },
            },
          },
        ],
      },
    };

    axios.get.mockImplementationOnce(() => Promise.resolve(data));

    await expect(fetchGif()).resolves.toEqual(data);

    expect(axios.get).toHaveBeenCalledWith(
      expect.stringContaining(
        "http://api.giphy.com/v1/gifs/search?q=chuck+norris&api_key="
      )
    );

    expect(axios.get).toHaveBeenCalledTimes(1);
  });

  it("fetches erroneously data from an API", async () => {
    const errorMessage = "Network Error";

    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage))
    );

    await expect(fetchGif("react")).rejects.toThrow(errorMessage);
  });
});
