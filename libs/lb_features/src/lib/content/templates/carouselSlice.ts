import { createGenericSlice } from "../../../../../lb_data-api/src";

/* When the next button is clicked on cards */
export const nextBtnSlice = createGenericSlice({
  name: "cardNextBtn_rn",
  initialState: {
    status: "loading",
    data: {},
  },
})({
  setIsCardNextBtnClicked(state, { payload }) {
    state.data = payload;
  },
});
export const { setIsCardNextBtnClicked } = nextBtnSlice.actions;

/* When user wants to start a new session after earlier session was completed */
export const onLastCardSlice = createGenericSlice({
  name: "onLastCard_rn",
  initialState: {
    status: "loading",
    data: {},
  },
})({
  setBehaviorOnLastCard(state, { payload }) {
    state.data = payload;
  },
});

export const { setBehaviorOnLastCard } = onLastCardSlice.actions;

/* Content status */
export const courseStatusSlice = createGenericSlice({
  name: "courseStatus_rn",
  initialState: {
    status: "loading",
    data: {},
  },
})({
  setCourseStatus(state, { payload }) {
    state.data = payload;
  },
});
export const { setCourseStatus } = courseStatusSlice.actions;


/* Content status posted to the server(On curriculum page start Button click, Last card, Inactive session) */
export const courseStatusPostedSlice = createGenericSlice({
  name: "courseStatusPosted_rn",
  initialState: {
    status: "loading",
    data: {},
  },
})({
  setPostedCourseStatus(state, { payload }) {
    state.data = payload;
  },
});

export const { setPostedCourseStatus } = courseStatusPostedSlice.actions;
