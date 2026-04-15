import {Grid, GridItem, Separator} from "mfront-ui";

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
        <div className={"m-4"}>
            <h2 className="mb-2 font-bold">Basic Grid</h2>
            <Grid gap={2} flow={"column"}>
                <GridItem className={"bg-red-100 h-9"}>1</GridItem>
                <GridItem className={"bg-red-200 h-9"}>2</GridItem>
                <GridItem className={"bg-red-300 h-9"}>3</GridItem>
                <GridItem className={"bg-red-400 h-9"}>4</GridItem>
                <GridItem className={"bg-red-500 h-9"}>5</GridItem>
                <GridItem className={"bg-red-600 h-9"}>6</GridItem>
                <GridItem className={"bg-red-700 h-9"}>7</GridItem>
                <GridItem className={"bg-red-800 h-9"}>8</GridItem>
            </Grid>
            <Separator className={"mt-5 mb-5"}/>

            <h2 className="mb-2 font-bold">Grid Column</h2>
            <Grid gap={1} cols={12}>
                <GridItem colSpan={3} className={"bg-red-100 h-9"}>Cols Span 3 of 12</GridItem>
                <GridItem colSpan={5} className={"bg-red-200 h-9"}>Cols Span 5 of 12</GridItem>
                <GridItem colSpan={4} className={"bg-red-300 h-9"}>Cols Span 4 of 12</GridItem>
                <GridItem colSpan={8} className={"bg-red-400 h-9"}>Cols Span 8 of 12</GridItem>
                <GridItem colSpan={2} className={"bg-red-500 h-9"}>Cols Span 2 of 12</GridItem>
                <GridItem colSpan={2} className={"bg-red-600 h-9"}>Cols Span 2 of 12</GridItem>
                <GridItem colSpan={6} className={"bg-red-700 h-9"}>Cols Span 6 of 12</GridItem>
                <GridItem colSpan={6} className={"bg-red-800 h-9"}>Cols Span 6 of 12</GridItem>
            </Grid>
            <Separator className={"mt-5 mb-5"}/>

            <h2 className="mb-2 font-bold">Grid Row & Column</h2>
            <Grid rows={2} cols={4} gap={2}>
                <GridItem rowSpan={2} className={"bg-red-100 p-2"}>Row Span 2 (1)</GridItem>
                <GridItem className={"bg-red-200 p-2"}>2</GridItem>
                <GridItem rowSpan={2} className={"bg-red-300 p-2"}>Row Span 2 (3)</GridItem>
                <GridItem className={"bg-red-400 p-2"}>4</GridItem>
                <GridItem rowSpan={2} className={"bg-red-500 p-2"}>Row Span 2 (5)</GridItem>
                <GridItem rowSpan={2} className={"bg-red-600 p-2"}>Row Span 2 (6)</GridItem>
                <GridItem className={"bg-red-700 p-2"}>7</GridItem>
                <GridItem className={"bg-red-800 p-2"}>8</GridItem>
                <GridItem className={"bg-red-900 p-2"}>9</GridItem>
                <GridItem colSpan={3} className="bg-green-900 p-2">Column Span 3 (10)</GridItem>
                <GridItem colSpan={3} className="bg-green-800 p-2">Column Span 3 (11)</GridItem>
                <GridItem className="bg-green-700 p-2">12</GridItem>
                <GridItem className="bg-green-600 p-2">13</GridItem>
                <GridItem colSpan={3} className="bg-green-500 p-2">Column Span 3 (14)</GridItem>
                <GridItem className="bg-green-400 p-2">15</GridItem>
                <GridItem className="bg-green-300 p-2">16</GridItem>
                <GridItem className="bg-green-200 p-2">17</GridItem>
                <GridItem className="bg-green-100 p-2">18</GridItem>
            </Grid>
            <Separator className={"mt-5 mb-5"}/>

            <h2 className="mb-2 font-bold">Random 1</h2>
            <Grid cols={6} rows={3} gap={2}>
                <GridItem rowSpan={4} className={"bg-blue-100 p-2"}>1</GridItem>
                <GridItem className={"bg-blue-200 p-2"}>2</GridItem>
                <GridItem rowSpan={4} className={"bg-blue-300 p-2"}>3</GridItem>
                <GridItem className={"bg-blue-400 p-2"}>4</GridItem>
                <GridItem rowSpan={4} className={"bg-blue-500 p-2"}>5</GridItem>
                <GridItem className={"bg-blue-600 p-2"}>6</GridItem>
                <GridItem className={"bg-blue-700 p-2"}>7</GridItem>
                <GridItem className={"bg-blue-800 p-2"}>8</GridItem>
                <GridItem className={"bg-blue-900 p-2"}>9</GridItem>
                <GridItem className={"bg-yellow-900 p-2"}>10</GridItem>
                <GridItem className={"bg-yellow-800 p-2"}>11</GridItem>
                <GridItem className={"bg-yellow-700 p-2"}>12</GridItem>
                <GridItem className={"bg-yellow-600 p-2"}>13</GridItem>
                <GridItem className={"bg-yellow-500 p-2"}>14</GridItem>
                <GridItem className={"bg-yellow-400 p-2"}>15</GridItem>
            </Grid>
            <Separator className={"mt-5 mb-5"}/>


            <h2 className="mb-2 font-bold">Random 2</h2>
            <Grid cols={6} rows={3} gap={2}>
                <GridItem rowSpan={4} colSpan={2} className={"bg-blue-100 p-2"}>1</GridItem>
                <GridItem className={"bg-blue-200 p-2"}>2</GridItem>
                <GridItem rowSpan={4} colSpan={2} className={"bg-blue-300 p-2"}>3</GridItem>
                <GridItem className={"bg-blue-400 p-2"}>4</GridItem>
                <GridItem rowSpan={4} className={"bg-blue-500 p-2"}>5</GridItem>
                <GridItem rowSpan={3} className={"bg-blue-600 p-2"}>6</GridItem>
                <GridItem className={"bg-blue-700 p-2"}>7</GridItem>
                <GridItem className={"bg-blue-800 p-2"}>8</GridItem>
                <GridItem className={"bg-blue-900 p-2"}>9</GridItem>
                <GridItem className={"bg-yellow-900 p-2"}>10</GridItem>
                <GridItem className={"bg-yellow-800 p-2"}>11</GridItem>
                <GridItem className={"bg-yellow-700 p-2"}>12</GridItem>
                <GridItem className={"bg-yellow-600 p-2"}>13</GridItem>
                <GridItem className={"bg-yellow-500 p-2"}>14</GridItem>
                <GridItem colSpan={3} className={"bg-yellow-400 p-2"}>15</GridItem>
            </Grid>
            <Separator className={"mt-5 mb-5"}/>

            <h2 className="mb-2 font-bold">Grid Column Start End</h2>
            <Grid gap={2} cols={6}>
                <GridItem colStart={2} colSpan={4} className={"bg-blue-700 p-2"}>1</GridItem>
                <GridItem colStart={1} colEnd={3} className={"bg-blue-800 p-2"}>2</GridItem>
                <GridItem colSpan={2} colEnd={7} className={"bg-blue-900 p-2"}>3</GridItem>
                <GridItem colStart={1} colEnd={7} className={"bg-yellow-900 p-2"}>4</GridItem>
            </Grid>
            <Separator className={"mt-5 mb-5"}/>


            <h2 className="mb-2 font-bold">Grid Column Start End 2</h2>
            <Grid gap={2} cols={5}>
                <GridItem colStart={2} colEnd={5} className={"bg-blue-700 p-2"}>1</GridItem>
                <GridItem colStart={1} className={"bg-blue-800 p-2"}>2</GridItem>
                <GridItem colStart={3} className={"bg-blue-900 p-2"}>3</GridItem>
                <GridItem colStart={5} className={"bg-yellow-900 p-2"}>4</GridItem>
                <GridItem colStart={1} colEnd={3} className={"bg-yellow-800 p-2"}>5</GridItem>
                <GridItem colStart={4} colEnd={6} className={"bg-yellow-700 p-2"}>6</GridItem>
                <GridItem colStart={2} colEnd={5} className={"bg-yellow-600 p-2"}>7</GridItem>
                <GridItem colSpan={5} className={"bg-yellow-500 p-2"}>8</GridItem>
            </Grid>
            <Separator className={"mt-5 mb-5"}/>

            <h2 className="mb-2 font-bold">Grid Row Start End</h2>
            <Grid gap={4} rows={3} flow={"column"}>
                <GridItem rowStart={2} rowSpan={2} className={"bg-blue-800 p-2"}>1</GridItem>
                <GridItem rowEnd={3} rowSpan={2} className={"bg-blue-800 p-2"}>2</GridItem>
                <GridItem rowStart={1} rowEnd={4} className={"bg-blue-800 p-2"}>3</GridItem>
            </Grid>
            <Separator className={"mt-5 mb-5"}/>

            <h2 className="mb-2 font-bold">Grid Responsive</h2>
            <Grid gap={2} cols={4}>
                <GridItem className={"bg-yellow-500 p-2"}>1</GridItem>
                <GridItem className={"bg-yellow-500 p-2"}>2</GridItem>
                <GridItem className={"bg-yellow-500 p-2"}>3</GridItem>
                <GridItem className={"bg-yellow-500 p-2"}>4</GridItem>
                <GridItem
                    colSpan={3}
                    colSpanMob={4}
                    colSpanTab={2}
                    colSpanLarge={3}
                    className={"bg-blue-300 p-2"}>
                    Responsive
                </GridItem>
            </Grid>
            <Separator className={"mt-5 mb-5"}/>
            
        </div>
    )
}