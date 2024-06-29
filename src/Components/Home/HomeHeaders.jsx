export default function HomeHeader({title,subheading}){
    return (
        <>
        <div>
              <h3>
                {title}
              </h3>
              <p className="descheading">
                {subheading}
              </p>
            </div>
        </>
    )
}