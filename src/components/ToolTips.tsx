import React from 'react'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'

const ToolTipWrapper = ({ children, icon, message }: { children: React.ReactNode, icon?: React.ComponentType, message: string }) => {

    const Icon = icon;
    return (
        <Tooltip>
            <TooltipTrigger>
                {children}
            </TooltipTrigger>
            <TooltipContent className='p-1.5 px-3 text-xs'>
                <div className='flex items-center gap-1 '>
                    {Icon && (<div className='w-4 h-4 flex items-center justify-center'>{<Icon />}</div>)}
                    <p>{message}</p>
                </div>
            </TooltipContent>
        </Tooltip>
    )
}

export default ToolTipWrapper