import { Appbar } from "../components/AppBAr"
import { Category } from "../components/Category"
import { EventCard } from "../components/EventCard"

export const DashBored =()=>{
    return <div>
        <div className="fixed top-0 w-full z-10 bg-white">
            <Appbar/>

        </div>
        <div className="mt-16">
        <div className="border-b border-slate-300 pb-10 bg-slate-100 relative">
            <img
                src="/Event_Manage.webp"
                className="sm:h-96 max-w-full lg:h-full pt-1 h-auto"
            />
            <button type="button" className="text-white bg-orange-700 hover:bg-orange-800 focus:outline-none font-medium rounded-md text-sm px-5 py-2.5 text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-md">
                Find Our Event
            </button>
        </div>
        </div>
        <div>
            <Category/>
        </div>
        <div>
            <EventCard 
            title="Mapping Out Your Life Webinar"
            Date="Fri,28 MAR"
            startime="1:30pm"
            organizer="Lalit"
            price={500}
            />
        </div>
       
    </div>
}