export function GridAlignmentDemo() {
  return (
    <div className="space-y-10 p-6">

      {/* 1️⃣ GRID ITSELF ALIGNMENT */}
      <div className="border p-4">
        <h2 className="mb-2 font-bold">1. Grid inside parent (mx-auto)</h2>

        <div className="w-full h-40 border bg-gray-100">
          <div className="grid grid-cols-[repeat(5,80px)] gap-2 w-fit mx-auto bg-yellow-100">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="bg-red-400 p-2 text-center">
                {i + 1}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2️⃣ GRID TRACK ALIGNMENT */}
      <div className="border p-4">
        <h2 className="mb-2 font-bold">2. justify-center (tracks inside grid)</h2>

        <div className="grid grid-cols-[repeat(5,80px)] gap-2 h-40 border justify-center bg-blue-100">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="bg-blue-400 p-2 text-center">
              {i + 1}
            </div>
          ))}
        </div>
      </div>

      {/* 3️⃣ ITEM ALIGNMENT */}
      <div className="border p-4">
        <h2 className="mb-2 font-bold">3. justify-items-center (inside each cell)</h2>

        <div className="grid grid-cols-5 gap-2 h-40 border justify-items-center items-center bg-green-100">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="bg-green-500 p-2 w-10 text-center">
              {i + 1}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default function ExampleGridPage() {
    return (
        <>

            <div className="space-y-10 p-6">
                <div className={"h-100 border bg-green-100 grid grid-cols-[repeat(5,80px)] gap-2 justify-end items-end"}>
                    <div className="bg-red-100 h-20">1</div>
                    <div className="bg-red-200 h-20">2</div>
                    <div className="bg-red-300 h-20">3</div>
                    <div className="bg-red-400 h-20">4</div>
                    <div className="bg-red-500 h-20">5</div>
                    <div className="bg-red-600 h-20">6</div>
                    <div className="bg-red-700 h-20">7</div>
                    <div className="bg-red-800 h-20">8</div>
                    <div className="bg-red-900 h-20">9</div>
                    <div className="bg-green-900 h-20">10</div>
                    <div className="bg-green-800 h-20">11</div>
                    <div className="bg-green-700 h-20">12</div>
                </div>
            </div>

            {/*<GridAlignmentDemo/>*/}

            {/*<div className={"grid gap-2 h-64 grid-cols-5"}>*/}
            {/*    <div className="bg-red-100 p-6">1</div>*/}
            {/*    <div className="bg-red-200 p-6">2</div>*/}
            {/*    <div className="bg-red-300 p-6">3</div>*/}
            {/*    <div className="bg-red-400 p-6">4</div>*/}
            {/*    <div className="bg-red-500 p-6">5</div>*/}
            {/*    <div className="bg-red-600 p-6">6</div>*/}
            {/*    <div className="bg-red-700 p-6">7</div>*/}
            {/*    <div className="bg-red-800 p-6">8</div>*/}
            {/*    <div className="bg-red-900 p-6">9</div>*/}
            {/*    <div className="bg-green-900 p-6">10</div>*/}
            {/*    <div className="bg-green-800 p-6">11</div>*/}
            {/*    <div className="bg-green-700 p-6">12</div>*/}
            {/*</div>*/}
        </>
    )
}