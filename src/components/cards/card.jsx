export const Card = ({ children, ...props }) => {
    const { item } = props;

    return (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:shrink-0">
              <img className="h-48 w-full object-cover md:h-full md:w-48" src={item.favicon} alt={item.name}/>
          </div>
          <div class="p-8">
            <h2 className="mt-4 font-bold text-2xl">{item.name}</h2>
          </div>
        </div>
      </div>
    )
}