import {
    Box,
    BarChart2,
    CheckSquare,
    Component,
    AlertCircle,
    AlertTriangle,
    Hexagon,
    LayoutDashboard,
    MessageCircle,
    ArrowLeftCircle,
    ServerCrash,
    Settings,
    Truck,
    Shield,
    Users,
    Lock,
} from 'lucide-react'

export interface NavLink {
    title: string
    label?: string
    href: string
    icon: JSX.Element
}

export interface SideLink extends NavLink {
    sub?: NavLink[]
}

export const sidelinks: SideLink[] = [
    {
        title: 'Dashboard',
        label: '',
        href: '/',
        icon: <LayoutDashboard size={18} />,
    },
    {
        title: 'Tasks',
        label: '3',
        href: '/tasks',
        icon: <CheckSquare size={18} />,
    },
    {
        title: 'Chats',
        label: '9',
        href: '/chats',
        icon: <MessageCircle size={18} />,
    },
    {
        title: 'Authentication',
        label: '',
        href: '',
        icon: <Shield size={18} />,
        sub: [
            {
                title: 'Sign In (email + password)',
                label: '',
                href: '/sign-in',
                icon: <Hexagon size={18} />,
            },
        ],
    },
    {
        title: 'Users',
        label: '',
        href: '/users',
        icon: <Users size={18} />,
    },
    {
        title: 'Requests',
        label: '10',
        href: '/requests',
        icon: <ArrowLeftCircle size={18} />,
        sub: [
            {
                title: 'Trucks',
                label: '9',
                href: '/trucks',
                icon: <Truck size={18} />,
            },
            {
                title: 'Cargos',
                label: '',
                href: '/cargos',
                icon: <Box size={18} />,
            },
        ],
    },
    {
        title: 'Analysis',
        label: '',
        href: '/analysis',
        icon: <BarChart2 size={18} />,
    },
    {
        title: 'Extra Components',
        label: '',
        href: '/extra-components',
        icon: <Component size={18} />,
    },
    {
        title: 'Error Pages',
        label: '',
        href: '',
        icon: <AlertCircle size={18} />,
        sub: [
            {
                title: 'Not Found',
                label: '',
                href: '/404',
                icon: <AlertTriangle size={18} />,
            },
            {
                title: 'Internal Server Error',
                label: '',
                href: '/500',
                icon: <ServerCrash size={18} />,
            },
            {
                title: 'Unauthorised Error',
                label: '',
                href: '/401',
                icon: <Lock size={18} />,
            },
        ],
    },
    {
        title: 'Settings',
        label: '',
        href: '/settings',
        icon: <Settings size={18} />,
    },
]
