let menuDataList=[
    {
        title:"数据汇总",
        name:"2eee",
        component:'sys/dashboard/Dashboard',
        path:"/index/dashboard",
        type:0,
        icon:'client',
        closable:false,
        meta:{
            keepAlive:true
        },
    },
    {
        title:"中介管理",
        name:"agencyList",
        component:'agency/agencyList',
        path:"/index/agencyList",
        type:0,
        icon:'client',
        closable:true,
        meta:{
            keepAlive:true
        },
    },
    {
        title:"客户线索",
        name:"khxs",
        component:'common',
        path:"khxs",
        type:1,
        icon:'clue',
        children:[
            {
                title:"客户管理",
                name:"customerList",
                component:'customer/customerList',
                path:"/customerList",
                icon:'client',
                closable:true,
                type:2,
                meta:{
                    keepAlive:false
                },
                superList:[
                    {
                        title:'客户线索',
                        path:''
                    }
                ]
            },
            {
                title:"市场备注",
                name:"bazaarList",
                component:'bazaar/bazaarList',
                path:"/bazaarList",
                icon:'client',
                type:2,
                closable:true,
                meta:{
                    keepAlive:true
                },
                superList:[
                    {
                        title:'客户线索',
                        path:''
                    }
                ]
            }
        ]
    },
    {
        title:"业主合同",
        name:"",
        path:"yzht",
        type:1,
        component:'common',
        icon:'client',
        children:[
            {
                title:"意向书管理",
                name:"proposalList",
                component:'proposal/proposalList',
                path:"/proposalList",
                icon:'1',
                type:2,
                meta:{
                    keepAlive:false
                },
                superList:[
                    {
                        title:'业主合同',
                        path:''
                    }
                ]
            },
            {
                title:"合同管理",
                name:"contractList",
                component:'contract/contractList',
                path:"/contractList",
                icon:'client',
                type:2,
                meta:{
                    keepAlive:false
                },
                superList:[
                    {
                        title:'业主合同',
                        path:''
                    }
                ]
            }
        ]
    },

    {
        title:"账单管理",
        name:"billList",
        component:'bill/billList',
        path:"/billList",
        type:0,
        icon:'client',
        meta:{
            keepAlive:false
        },
    },

    {
        title:"空间管理",
        name:"spaceList",
        component:'space/spaceList',
        path:"/spaceList",
        type:0,
        icon:'client',
        meta:{
            keepAlive:false
        },
    },

    {
        title:"管理员",
        name:"",
        component:'common',
        path:"gly",
        icon:'client',
        type:1,
        children:[
            {
                title:"管理员列表",
                name:"adminList",
                component:'admin/adminList',
                path:"/adminList",
                icon:'client',
                type:2,
                meta:{
                    keepAlive:true
                },
                superList:[
                    {
                        title:'管理员',
                        path:''
                    }
                ]
            },
            {
                title:"管理员日志",
                name:"adminLog",
                component:'admin/adminLog',
                path:"/adminLog",
                icon:'client',
                type:2,
                meta:{
                    keepAlive:true
                },
                superList:[
                    {
                        title:'管理员',
                        path:''
                    }
                ]
            },
            {
                title:"用户列表",
                name:"user_list",
                component:'sys/user/user_list',
                path:"/user_list",
                icon:'client',
                type:2,
                meta:{
                    keepAlive:true
                },
                superList:[
                    {
                        title:'管理员',
                        path:''
                    }
                ]
            }
        ]
    },
]
export default menuDataList