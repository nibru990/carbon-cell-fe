import React from 'react'
import * as MdIcons from 'react-icons/md'
import * as GoIcons from 'react-icons/go'

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <GoIcons.GoHome />,
        cName: 'nav-text'
    },
    {
        title: 'Crypto Price',
        path: '/organizations',
        icon: <GoIcons.GoOrganization />,
        cName: 'nav-text'
    },
    {
        title: 'Trades',
        path: '/trades',
        icon: <MdIcons.MdCandlestickChart />,
        cName: 'nav-text'
    },
    {
        title: 'Wallet',
        path: '/wallet',
        icon: <MdIcons.MdAccountBalanceWallet />,
        cName: 'nav-text'
    }
    
]
