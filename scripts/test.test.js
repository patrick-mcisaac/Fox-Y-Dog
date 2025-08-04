/**
 * @jest-environment jsdom
 */

import { displayDogImage } from "./main.js";

describe("returns true if resolved", () => {
  beforeEach(() => {
    jest.spyOn(fetch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it(`returns true if fetch resolved`, async () => {
    displayDogImage();
    const data = await fetch();
    expect(data).resolves;
  });
});
