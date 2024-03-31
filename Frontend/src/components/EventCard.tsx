import React from 'react';

interface EventCard {
  title: string;
  startime: string;
  // image: string;
  price: number;
  organizer: string;
  Date: string;
}

export const EventCard = ({
  title,
  startime,
  // image,
  organizer,
  price,
  Date
}: EventCard) => {
  return (<div>

  
    <div className="flex flex-wrap">
      <div className="p-4 rounded-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
        <section className="py-12  border-slate-300">
          <div className="container px-4 md:px-6">
            <div className="bg-gray-200 rounded-2xl p-6 flex flex-col justify-between transition duration-300 ease-in-out hover:bg-slate-300">
              <div className="space-y-4">
                <img
                  alt="Cover Image"
                  className="aspect-video rounded-lg object-cover object-center overflow-hidden h-auto w-full"
                  src="/EventImage.jpg"
                />
                <div className="space-y-2">
                  <h2 className="text-xl font-bold tracking-tighter text-gray-900">{title}</h2>
                  <div className="flex ">
                    {Date}
                    <div className="flex justify-center pt-3 pl-1 pr-1">
                      <Circle />
                    </div>
                    {startime}
                  </div>
                  <div>
                    From, {price}
                  </div>
                  <div className="text-xl">
                    {organizer}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    </div>
  );
}

export function Circle() {
  return <div className="w-1 h-1 rounded-full bg-slate-400"></div>
}
