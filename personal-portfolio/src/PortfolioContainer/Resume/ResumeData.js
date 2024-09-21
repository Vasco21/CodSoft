import React from 'react';
import SchoolIcon from '@mui/icons-material/School';
import HistoryIcon from '@mui/icons-material/History';
import GitHubIcon from '@mui/icons-material/GitHub';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import InterestsIcon from '@mui/icons-material/Interests';

export const ResumeData = [
    {
        title:"Education",
        icon: <SchoolIcon />,
        link:"/Education",
        
    },
    {
        title:"Work History",
        icon: <HistoryIcon />,
        link:"/History"

    },
    {
        title:"Programming Skill",
        icon: <GitHubIcon />,
        link:"/Skill"
    },
    {
        title:"Project",
        icon: <AccountTreeIcon />,
        link:"/Project"
    },
    {
        title:"Interest",
        icon: <InterestsIcon />,
        link:"/Interest"
    },

];
