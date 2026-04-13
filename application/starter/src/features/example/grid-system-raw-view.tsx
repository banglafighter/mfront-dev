import {Separator} from "mfront-ui";


export default function GridSystemRawView() {
    return (
        <div className={"mb-8"}>

            <Separator className={"mt-5 mb-5"}/>
            <Separator className={"mt-5 mb-5"}/>
            <Separator className={"mt-5 mb-5"}/>
            <Separator className={"mt-5 mb-5"}/>

            <div className="grid h-70 border gap-2">
                <div className="bg-red-400 p-6">1</div>
                <div className="bg-blue-400 p-6">2</div>
                <div className="bg-green-400 p-6">3</div>
            </div>

            <Separator className={"mt-5 mb-5"}/>

            <div className={"grid gap-2 h-64"}>
                <div className="bg-red-100 p-6">1</div>
                <div className="bg-red-200 p-6">2</div>
                <div className="bg-red-300 p-6">3</div>
                <div className="bg-red-400 p-6">4</div>
                <div className="bg-red-500 p-6">5</div>
                <div className="bg-red-600 p-6">6</div>
                <div className="bg-red-700 p-6">7</div>
                <div className="bg-red-800 p-6">8</div>
                <div className="bg-red-900 p-6">9</div>
                <div className="bg-green-900 p-6">10</div>
                <div className="bg-green-800 p-6">11</div>
                <div className="bg-green-700 p-6">12</div>
            </div>

            <Separator className={"mt-5 mb-5"}/>

            <div className="grid grid-cols-3 h-64 content-center gap-4 bg-gray-100">
                <div className="bg-red-300">A</div>
                <div className="bg-red-300">B</div>
                <div className="bg-red-300">C</div>
            </div>

            <Separator className={"mt-5 mb-5"}/>

            <div className="grid grid-cols-3 w-full justify-center gap-4 bg-gray-100 p-4">
                <div className="bg-blue-300 w-16">1</div>
                <div className="bg-blue-300 w-16">2</div>
                <div className="bg-blue-300 w-16">3</div>
            </div>

            <Separator className={"mt-5 mb-5"}/>

            <div className="grid grid-cols-3 h-40 gap-4 place-items-center bg-gray-100">
                <div className="bg-green-300">1</div>
                <div className="bg-green-300">2</div>
                <div className="bg-green-300">3</div>
            </div>

            <Separator className={"mt-5 mb-5"}/>

            <div className="grid grid-cols-3 h-40 gap-4 items-center bg-gray-100">
                <div className="bg-red-300">A</div>
                <div className="bg-red-300">B</div>
                <div className="bg-red-300">C</div>
            </div>

            <Separator className={"mt-5 mb-5"}/>

            <div className="grid grid-cols-3 gap-4 justify-items-start bg-gray-100 p-4">
                <div className="bg-blue-300 w-12">1</div>
                <div className="bg-blue-300 w-12">2</div>
                <div className="bg-blue-300 w-12">3</div>
            </div>

            <Separator className={"mt-5 mb-5"}/>

            <div className="grid grid-cols-3 grid-flow-row dense gap-4">
                <div className="row-span-2 bg-red-300">Tall</div>
                <div className="bg-blue-300">1</div>
                <div className="bg-green-300">2</div>
                <div className="bg-yellow-300">3</div>
            </div>

            <Separator className={"mt-5 mb-5"}/>

            <div className="grid grid-cols-4 grid-rows-4 gap-4 h-64">
                <div className="col-start-2 col-end-4 row-start-2 row-end-4 bg-red-300">
                    A
                </div>
                <div className="col-start-1 col-end-3 row-start-2 row-end-4 bg-blue-300 opacity-70">
                    B (overlap)
                </div>
            </div>

            <Separator className={"mt-5 mb-5"}/>

            <div className="grid grid-cols-4 grid-rows-3 gap-4 h-64">
                <div className="col-span-2 bg-red-300">A</div>
                <div className="col-start-2 col-end-4 row-start-1 row-end-3 bg-purple-300">
                    Box
                </div>
            </div>

            <Separator className={"mt-5 mb-5"}/>

            <div className="grid grid-cols-4 grid-rows-3 gap-4 h-64">
                <div className="col-span-2 bg-red-300">A</div>
                <div className="row-span-2 bg-blue-300">B</div>
                <div className="col-span-2 row-span-2 bg-green-300">C</div>
            </div>

            <Separator className={"mt-5 mb-5"}/>

            <div className="grid grid-cols-3 gap-4 p-4">
                <div className="bg-red-200">1</div>
                <div className="bg-blue-200">2</div>
                <div className="bg-green-200">3</div>
                <div className="bg-yellow-200">4</div>
            </div>
            <div>New Era</div>
            <Separator className={"mt-5 mb-5"}/>

            <div className={"grid gap-12"}>
                <div className="col-span-3 bg-red-200">02</div>
                <div className="col-span-3 bg-red-200">02</div>

                <div className="row-span-3 bg-red-100">01</div>
                <div className="row-span-3 bg-red-300">03</div>
                <div className="row-span-3 bg-red-400">04</div>
            </div>

            <Separator className={"mt-5 mb-5"}/>


            <div className="grid grid-flow-col grid-rows-3 gap-4">
                <div className="row-span-3 bg-red-300">01</div>
                <div className="col-span-2 bg-blue-300">02</div>
                <div className="col-span-2 row-span-2 bg-green-300">03</div>
            </div>

            <Separator className={"mt-5 mb-5"}/>

            <div className="grid grid-cols-3 grid-rows-3 gap-4">
                <div className="row-span-3 bg-red-300">Sidebar</div>
                <div className="col-span-2 bg-blue-300">Header</div>
                <div className="col-span-2 row-span-2 bg-green-300">Content</div>
            </div>

            <Separator className={"mt-5 mb-5"}/>

            <div className="grid grid-cols-4 grid-rows-3 gap-4">
                <div className="col-span-4 bg-gray-200">Navbar</div>
                <div className="row-span-2 bg-gray-300">Sidebar</div>
                <div className="col-span-3 bg-gray-100">Stats</div>
                <div className="col-span-3 bg-gray-100">Charts</div>
            </div>

            <Separator className={"mt-5 mb-5"}/>

            <div className="grid grid-cols-3 grid-rows-3 gap-4">
                <div className="col-span-2 row-span-2 bg-pink-300">Featured</div>
                <div className="bg-yellow-300">Ad</div>
                <div className="bg-green-300">News</div>
                <div className="col-span-3 bg-blue-300">Footer</div>
            </div>


            <Separator className={"mt-5 mb-5"}/>

            <div className="grid grid-cols-3 auto-rows-[100px] gap-4">
                <div className="row-span-2 bg-red-200">Tall</div>
                <div className="bg-blue-200">Small</div>
                <div className="row-span-3 bg-green-200">Big</div>
                <div className="bg-yellow-200">Small</div>
            </div>


            <Separator className={"mt-5 mb-5"}/>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-red-200">1</div>
                <div className="bg-blue-200">2</div>
                <div className="bg-green-200">3</div>
                <div className="bg-yellow-200">4</div>
            </div>

            <Separator className={"mt-5 mb-5"}/>

            <div className="grid grid-flow-col grid-rows-3 gap-4 h-64 text-white font-bold text-center">
                <div className="row-span-2 row-start-2 bg-red-500 flex items-center justify-center">
                    01
                </div>

                <div className="row-span-2 row-end-3 bg-blue-500 flex items-center justify-center">
                    02
                </div>

                <div className="row-start-1 row-end-4 bg-green-500 flex items-center justify-center">
                    03
                </div>
            </div>

            <Separator className={"mt-5 mb-5"}/>

            <div className="grid grid-flow-col grid-rows-3 gap-4">
                <div className="row-start-2 row-span-2 bg-gray-300">Step 1</div>
                <div className="row-end-3 row-span-2 bg-gray-400">Step 2</div>
                <div className="row-span-3 bg-gray-500">Progress</div>
            </div>

            <Separator className={"mt-5 mb-5"}/>
            <div className="grid grid-flow-col grid-rows-3 gap-4">
                <div className="row-start-2 row-span-2 bg-red-200">Backlog</div>
                <div className="row-end-3 row-span-2 bg-yellow-200">In Progress</div>
                <div className="row-span-3 bg-green-200">Done</div>
            </div>

            <Separator className={"mt-5 mb-5"}/>
            <div className="grid grid-flow-col grid-rows-3 gap-4 h-72">
                <div className="row-start-2 row-span-2 bg-purple-300">Card A</div>
                <div className="row-end-3 row-span-2 bg-indigo-300">Card B</div>
                <div className="row-span-3 bg-pink-300">Hero</div>
            </div>

            <Separator className={"mt-5 mb-5"}/>

            <div className="grid grid-cols-12 grid-rows-6 gap-4">
                <div className="col-span-12 bg-gray-800 text-white">Topbar</div>
                <div className="col-span-2 row-span-5 bg-gray-200">Sidebar</div>
                <div className="col-span-10 bg-white">Main</div>
                <div className="col-span-5 bg-gray-100">Chart</div>
                <div className="col-span-5 bg-gray-100">Table</div>
                <div className="col-span-10 bg-gray-200">Footer</div>
            </div>

        </div>
    )
}