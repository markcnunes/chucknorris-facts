import React from "react";
import { mount, shallow } from "enzyme";
import axios from "axios";
import Message from "../../components/Message";
import { act } from "react-dom/test-utils";

jest.mock("axios");

describe("Message test", () => {
  let wrapper;

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders with loading", () => {
    wrapper = shallow(<Message />);

    expect(wrapper.html()).toBe(
      '<div class="message"><div>...loading</div></div>'
    );
  });

  test("renders with data", async () => {
    const giphyApidata = {
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

    const chuckNorrisApiData = {
      data: {
        icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        value: "Chuck Norris survived his execution. His executioners did not.",
      },
    };

    await act(async () => {
      await axios.get.mockImplementationOnce(() =>
        Promise.resolve(giphyApidata)
      );
      await axios.get.mockImplementationOnce(() =>
        Promise.resolve(chuckNorrisApiData)
      );
      wrapper = mount(<Message />);
    });

    await expect(axios.get).toHaveBeenCalledWith(
      "https://api.chucknorris.io/jokes/random"
    );

    await expect(axios.get).toHaveBeenCalledTimes(2);

    wrapper.update();

    await expect(wrapper.find("h1").text()).toEqual(
      "Chuck Norris survived his execution. His executioners did not."
    );
  });
});
