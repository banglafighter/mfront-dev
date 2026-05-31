import {type UINode, useHTTPClient} from "mfront";
import {Button, Pagination, TableGenerator, useTableEngine} from "mfront-ui";
import {type SortDirection, type WebPaginationPropsBase, type WebTableGeneratorColumnProps} from "mmcore-ui";
import {useState} from "mfront";
import {Trash} from "lucide-react";

function TableView() {
    const [pagination, setPagination] = useState<WebPaginationPropsBase | null>(null)
    const engine = useTableEngine()
    const httpClient = useHTTPClient()
    engine.registerColumns((columns: WebTableGeneratorColumnProps[]): WebTableGeneratorColumnProps[] => {
        columns.push(
            {columnName: "id", headerContent: "Id", sortable: true},
            {columnName: "name", headerContent: "Name", sortable: true},
            {columnName: "email", headerContent: "Email", sortable: true},
            {columnName: "salary", headerContent: "Salary", sortable: true},
            {columnName: "age", headerContent: "Age", sortable: false},
            {columnName: "sex", headerContent: "Sex", sortable: false},
            {
                columnName: "action",
                headerContent: "Action",
                sortable: false,
                customize: (row: Record<string, UINode>, dataList: Record<string, UINode>[], columnName: string, headerContent?: UINode) => {
                    return (
                        <Button size={"iconXs"} variant="ghost" onClick={async () =>{await deleteItem(row.id)}} className={"cursor-pointer"}>
                            <Trash/>
                        </Button>
                    )
                }
            },
        )
        return columns
    })

    const deleteItem = async (id: any) => {
        const response = await httpClient.request({
            url: `api/v1/account/delete/${id}`,
            method: "DELETE",
            bodyType: "json"
        })
        if (response.isSuccess) {
            await loadData()
        }
    }

    const loadData = async (sortDirection: SortDirection | null = "desc", columnName: string | null = null, page: number | null = null) => {
        const query: Record<string, any> = {}
        if (columnName && sortDirection) {
            query["sort-field"] = columnName
            query["sort-order"] = sortDirection
        }
        if (page) {
            query["page"] = page
        }
        const response = await httpClient.request<Record<string, any>, unknown, Record<string, any>>({
            url: "api/v1/account/read-all",
            method: "GET",
            query: query,
        })
        if (response.isSuccess && response.body) {
            if (response.body.data){
                engine.loadData(response.body.data)
            }
            if (response.body.pagination) {
                const _pagination = response.body.pagination
                setPagination({
                    totalPage: _pagination.totalPage,
                    itemPerPage: _pagination.itemPerPage,
                    currentPage: _pagination.page,
                })
            }
        }
    }

    const createByCentalBaseUrl = async () => {
        const response = await httpClient.request({
            url: "api/v1/account/create",
            method: "POST",
            bodyType: "json",
            body: {
                "data": {
                    "about": "About",
                    "age": 0,
                    "dateOfBirth": "10-12-2026",
                    "email": "user@d-12-12.com",
                    "name": "string",
                    "password": "string",
                    "salary": 0,
                    "sex": "string"
                }
            }
        })
        if (response.isSuccess) {
            await loadData()
        }
    }

    return (
        <div className={"mt-10"}>
            <Button onClick={async () => {await loadData()}}>Load Table Data</Button>
            <Button variant={"outline"} onClick={createByCentalBaseUrl} className={"ml-2"}>Create and Reload</Button>
            <TableGenerator engine={engine} className={"mt-4 mb-4"} onClickSort={loadData}/>
            {
                pagination && <Pagination
                    className={"mt-3 float-right"}
                    totalPage={pagination.totalPage}
                    itemPerPage={pagination.itemPerPage}
                    currentPage={pagination.currentPage}
                    onChangePagination={async (pageNumber: number) => {
                        await loadData(null, null, pageNumber)
                    }}
                />
            }

        </div>
    )
}


export default function ExampleHTTPPage() {
    const httpClient = useHTTPClient()

    const createByAbsoluteUrl = async () => {
        const response = await httpClient.request({
            url: "http://127.0.0.1:1530/api/v1/account/create",
            isAbsoluteUrl: true,
            method: "POST",
            bodyType: "json",
            body: {
                "data": {
                    "about": "About",
                    "age": 0,
                    "dateOfBirth": "10-12-2026",
                    "email": "user@d-12-12.com",
                    "name": "string",
                    "password": "string",
                    "salary": 0,
                    "sex": "string"
                }
            }
        })
        console.log(response)
    }

    const create = async () => {
        const response = await httpClient.request({
            baseURL: "http://127.0.0.1:1530/",
            url: "api/v1/account/create",
            method: "POST",
            bodyType: "json",
            body: {
                "data": {
                    "about": "About",
                    "age": 0,
                    "dateOfBirth": "10-12-2026",
                    "email": "user@d-12-12.com",
                    "name": "string",
                    "password": "string",
                    "salary": 0,
                    "sex": "string"
                }
            }
        })
        console.log(response)
    }

    const createByCentalBaseUrl = async () => {
        const response = await httpClient.request({
            url: "api/v1/account/create",
            method: "POST",
            bodyType: "json",
            body: {
                "data": {
                    "about": "About",
                    "age": 0,
                    "dateOfBirth": "10-12-2026",
                    "email": "user@d-12-12.com",
                    "name": "string",
                    "password": "string",
                    "salary": 0,
                    "sex": "string"
                }
            }
        })
        console.log(response)
    }

    return (
        <>
           <div className={"flex gap-3"}>
               <Button onClick={create}> Create </Button>
               <Button onClick={createByAbsoluteUrl}> Create by Absolute Url</Button>
               <Button onClick={createByCentalBaseUrl}> Create by Cental Base Url</Button>
           </div>
            <div>
                <TableView/>
            </div>
        </>
    )
}