function App() {

  return (
    <div className="h-screen flex items-center justify-center flex-col">
      <p className='text-4xl font-bold'>
        Click below button for DataNeuron Task
      </p>
      <button className='text-3xl font-bold underline' onClick={() => setCount((count) => count + 1)}>
        Assignment
      </button>
    </div>
  )
}

export default App
