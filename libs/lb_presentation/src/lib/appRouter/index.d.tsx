export interface ComponentProps{
    path: string;
    element: React.ReactNode
}

export interface AppRouterProps{
    components:ComponentProps[],
}
