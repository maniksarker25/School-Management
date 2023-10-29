/** @format */

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = [
	{
		id: "event_101",
		sl: 1,
		title: "Inception of Dhaka University Nanotechnology Centre 1",
		image: "https://i.ibb.co/Tc4t34t/1697549574-Invitation-Card-Draft-Finalfor-ICT17oct-page-0001.jpghttps://i.ibb.co/Yjqz5X4/1697001875invitaion-card-page-0001.jpg",
		publishAt: "19-10-2023",
		endAt: "19-10-2023",
		createdBy: "MG Rakib",
		isShow: false,
	},
	{
		id: "event_103",
		sl: 2,
		title: "১৭তম কেন্দ্রীয় বার্ষিক নাট্যোৎসব ২০২৩: দর্শক সম্মুখে ১৫টি বাংলা নাটক মঞ্চায়ন",
		image: "https://i.ibb.co/kqC16w4/169622551902-Coverposter.jpg",
		publishAt: "18-10-2023",
		endAt: "19-10-2023",
		createdBy: "MG Rakib",
		isShow: true,
	},
	{
		id: "event_102",
		sl: 3,
		title: "Inaugural program of the DURCMC",
		image: "https://i.ibb.co/Tc4t34t/1697549574-Invitation-Card-Draft-Finalfor-ICT17oct-page-0001.jpghttps://i.ibb.co/Yjqz5X4/1697001875invitaion-card-page-0001.jpg",
		publishAt: "16-10-2023",
		endAt: "19-10-2023",
		createdBy: "MG Rakib",
		isShow: true,
	},

	{
		id: "event_104",
		sl: 4,
		title: "ISRT organizes Launching Ceremony of Applied Statistics and Data Science Programs",
		image: "https://i.ibb.co/6W4rjs9/1695798280-Screenshotfrom2023-09-2712-59-09.png",
		publishAt: "18-10-2023",
		endAt: "19-10-2023",
		createdBy: "MG Rakib",
		isShow: false,
	},
];

export const fetchEvents = createAsyncThunk("events/fetchEvents", async () => {
	const response = await localStorage.getItem("events_key_sm");
	const events = JSON.parse(response);
	console.log(events, ' local')
	return events;
});

// const initialState = [];

const eventsSlice = createSlice({
	name: "eventsSlice",
	initialState,
	reducers: {
		getEventsList: state => {
			const events =
				JSON.parse(localStorage.getItem("events_key_sm")) || [];
			return [...state, ...events];
		},
		setShowOrNot: (state, { payload }) => {
			const { id, value } = payload;

			return state.map(item => {
				if (item.id === id) {
					return { ...item, isShow: value };
				}
				return item;
			});
		},
		deleteEvents: (state, { payload }) => {
			return state.filter(item => item.id !== payload);
		},
		saveToLocalStorage: (state, { payload }) => {
			localStorage.setItem("events_key_sm", JSON.stringify(state));
			return state;
		},
	},
	// extraReducers: builder => {
	// 	builder
	// 		.addCase(fetchEvents.pending, state => {
	// 			return state = [];
	// 		})
	// 		.addCase(fetchEvents.fulfilled, (state, { payload }) => {
	// 		return	state = [...payload];
	// 		})
	// 		.addCase(fetchEvents.rejected, state => {
	// 			return state = [];
	// 		});
	// },
});

export const { getEventsList, setShowOrNot, deleteEvents, saveToLocalStorage } =
	eventsSlice.actions;
export default eventsSlice.reducer;
