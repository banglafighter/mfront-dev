import {Button, Pagination, Table, TableGenerator, TBody, TD, TFoot, TH, THead, TR, useTableEngine} from "mfront-ui";
import {type SortDirection, type WebTableGeneratorColumnProps} from "mmcore-ui";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
]

function sortByKey(data: any[], key: string, order: "asc" | "desc") {
    return [...data].sort((a, b) => {
        const valA = a[key];
        const valB = b[key];

        const aStr = String(valA);
        const bStr = String(valB);

        return order === "asc"
            ? aStr.localeCompare(bStr)
            : bStr.localeCompare(aStr);
    });
}


function BasicTable (){
    return (
        <Table>
            <THead>
                <TR>
                    <TH>Invoice</TH>
                    <TH>Payment Status</TH>
                    <TH>Payment Method</TH>
                    <TH className="text-right">Total Amount</TH>
                </TR>
            </THead>
            <TBody>
                {invoices.map((invoice, index) => (
                    <TR key={index}>
                        <TD>{invoice.invoice}</TD>
                        <TD>{invoice.paymentStatus}</TD>
                        <TD>{invoice.paymentMethod}</TD>
                        <TD className="text-right">{invoice.totalAmount}</TD>
                    </TR>
                ))}
            </TBody>
            <TFoot>
                <TR>
                    <TD className={"text-right"} colSpan={3}>Total</TD>
                    <TD className="text-right">$2,500.00</TD>
                </TR>
            </TFoot>
        </Table>
    )
}

function TableEngineExample() {
    const engine = useTableEngine()
    engine.registerColumns((columns: WebTableGeneratorColumnProps[]): WebTableGeneratorColumnProps[] => {
        columns.push(
            {columnName: "invoice", headerContent: "Invoice", sortable: true},
            {columnName: "paymentStatus", headerContent: "Payment Status", sortable: true},
            {columnName: "paymentMethod", headerContent: "Payment Method", sortable: true},
            {columnName: "totalAmount", headerContent: "Total Amount", sortable: false, columnClassName: "text-right"},
        )
        return columns
    })

    const handleSorting = (sortDirection: SortDirection, columnName: string) => {
        const sortedData = sortByKey(invoices, columnName, sortDirection as "asc" | "desc");
        engine.loadData(sortedData);
    }

    return (
        <>
            <Button onClick={()=>{ engine.loadData(invoices)}}>Load Data</Button>
            <TableGenerator engine={engine} className={"mt-4 mb-4"} onClickSort={handleSorting}/>
        </>
    )
}

export default function ExampleTablePage() {
    return (
        <>
            <div className={"m-4"}>
                <Pagination
                    className={"mb-4"}
                    totalPage={50}
                    itemPerPage={25}
                    currentPage={49}
                    onChangePagination={(pageNumber: number) => {
                        console.log(pageNumber)
                    }}
                />

                <TableEngineExample/>
                <BasicTable/>
            </div>
        </>
    )
}