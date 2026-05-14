import {Table, TBody, TD, TFoot, TH, THead, TR} from "mfront-ui";

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

export default function ExampleTablePage() {
    return (
        <>
            <div className={"m-4"}>
                <BasicTable/>
            </div>
        </>
    )
}