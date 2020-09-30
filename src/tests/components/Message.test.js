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

    expect(wrapper.html()).toBe("<div>...loading</div>");
  });

  test("renders with data", async () => {
    const data = {
      data: {
        icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        value: "Chuck Norris survived his execution. His executioners did not.",
      },
    };

    await act(async () => {
      await axios.get.mockImplementationOnce(() => Promise.resolve(data));
      wrapper = mount(<Message />);
    });

    await expect(axios.get).toHaveBeenCalledWith(
      "https://api.chucknorris.io/jokes/random"
    );

    await expect(axios.get).toHaveBeenCalledTimes(1);

    wrapper.update();

    await expect(wrapper.find("h2").text()).toEqual(
      "Chuck Norris survived his execution. His executioners did not."
    );
  });
});
