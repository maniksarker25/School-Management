import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import WcIcon from '@mui/icons-material/Wc';
import EventIcon from '@mui/icons-material/Event';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
export const sidebar = {
  admin: [
    
    {
      title: "student",
      icon: <WcIcon/>,
      link: "/all-student",
    },
    {
      title: "event",
      icon: <EventIcon/>,
      data: [
        {
          title: "Add Event",
          link: "/dashboard/event/add-event",
        },
        {
          title: "Manage Event",
          link: "/dashboard/event/manage-event",
        },
      ],
    },
    {
      title: "employ",
      icon: <PeopleOutlineIcon/>,
      data: [
        {
          title: "add employee",
          link: "/dashboard/app-employee",
        },
        {
          title: "add department",
          link: "/dashboard/app-department",
        },
        {
          title: "add designation",
          link: "/dashboard/add-designation",
        },
      ],
    },
    {
      title: "academic",
      icon: <HomeOutlinedIcon/>,
      data: [
        {
          title: "teacher schedule",
          link: "/dashboard/teacher-schedule",
        },
        {
          title: "promotion",
          link: "/dashboard/promotion",
        }
        
      ],
    },
    {
      title: "classes",
      icon: <HomeOutlinedIcon/>,
      data: [
        {
          title: "teacher schedule",
          link: "/dashboard/teacher-schedule",
        },
        {
          title: "promotion",
          link: "/dashboard/promotion",
        }
        
      ],
    },
    {
      title: "subjects",
      icon: <HomeOutlinedIcon/>,
      data: [
        {
          title: "teacher schedule",
          link: "/dashboard/teacher-schedule",
        },
        {
          title: "promotion",
          link: "/dashboard/promotion",
        }
        
      ],
    },
    
  ],
	

};
