import type {DefaultAccordionItemProps} from "mmcore-ui";
import {Accordion} from "mfront-ui";

const items: DefaultAccordionItemProps[] = [
    {
        accordionId: "item-1",
        labelContent: "How do I reset my password?",
        component: "Click on 'Forgot Password' on the login page, enter your email address, and we'll send you a link to reset your password. The link will expire in 24 hours.",
    },
    {
        accordionId: "item-2",
        labelContent: "Can I change my subscription plan?",
        component: "Yes, you can upgrade or downgrade your plan at any time from your account settings. Changes will be reflected in your next billing cycle.",
    },
    {
        accordionId: "item-3",
        labelContent: "What payment methods do you accept?",
        component: "We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through our payment partners.",
    },
]

export default function ExampleAccordionPage() {
    return (
        <>
            <Accordion items={items}/>
        </>
    )
}