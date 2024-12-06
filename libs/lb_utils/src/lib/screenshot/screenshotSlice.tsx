
import { createGenericSlice } from "../../../../lb_data-api/src/index";


/* *********************** For chat context ****************************** */

export const screenshotsSlice: any = createGenericSlice({
  name: "screenshots_rn",
  initialState: {
    status: "loading",
    data: [],
  },
})({
  screenshotUrls(state, action : { payload }) {
    const newData = action.payload as never;
    // add the payload to the previous state
    state.data?.push(newData)
    // empty the screenshor list (in ui-screen)
  },resetScreenshots(state) {
    state.data = [];
    state.status = "loading";
  },
});

export const { screenshotUrls, resetScreenshots } = screenshotsSlice.actions;


/* For storing the data into RTK slice
const dispatch = useDispatch();
dispatch(
  screenshotUrls({
    urls: ["item_unselected"],
 
  })
);

//For reading  the data from RTk slice
const data  = useSelectorWrap("screenshots_rn"), */