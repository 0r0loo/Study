// Parameter type

function sampleFunction(x: number, y: string, z: boolean) {

}

type Params = Parameters<typeof sampleFunction>
type Params2 = Parameters<(one: number) => void>


const params: Params = [1, '2', true]
