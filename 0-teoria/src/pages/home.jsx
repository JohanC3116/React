import { Cardlist } from "../components/CardList"

export const Home = () =>{
    //
    return(
        
        <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-black text-white">
        <div className="bg-violet-900 mx-auto w-full max-w-3xl rounded-xl h-auto p-4">
            {/*Comentarios en React*/}
            <h1 className="text-3xl font-bold text-center mb-8">React 19 - TEORIA</h1>
            <Cardlist></Cardlist>
        </div>
        </main>
    )
}