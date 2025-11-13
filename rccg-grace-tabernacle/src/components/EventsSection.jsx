import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

export default function EventsSection() {
  const events = [
    {
      title: "Sunday Worship Service",
      date: "Every Sunday | 9:00 AM",
      location: "Church Auditorium",
      description:
        "Join us in heartfelt worship, prayer, and the Word. Experience God's presence and love in a family of faith.",
      image:
        "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Bible Study & Faith Clinic",
      date: "Every Tuesday | 6:00 PM",
      location: "Main Hall",
      description:
        "A time to grow deeper in the Word and strengthen your faith. Come expecting to learn and be renewed.",
      image:
        "https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Night of Encounter",
      date: "Every First Friday | 10:00 PM",
      location: "Church Auditorium",
      description:
        "A powerful night of prayer, deliverance, and prophetic worship. Step into a new level of grace and breakthrough.",
      image:
        "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-16 text-center overflow-hidden">
      {/* Heading */}
      <motion.h2
        className="text-3xl md:text-4xl font-heading text-primary mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Upcoming Events
      </motion.h2>

      {/* Events Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {events.map((event, index) => (
          <motion.div
            key={event.title}
            className="bg-white rounded-2xl shadow-2xl text-left overflow-hidden hover:-translate-y-2 transition-all duration-500 hover:shadow-gold/40"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Event Image */}
            <div className="h-48 w-full overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Event Content */}
            <div className="p-8">
              <h3 className="text-2xl font-heading text-primary mb-3">
                {event.title}
              </h3>
              <div className="flex items-center text-gray-600 text-sm mb-2">
                <Calendar size={18} className="text-[#d4af37] mr-2" />
                {event.date}
              </div>
              <div className="flex items-center text-gray-600 text-sm mb-4">
                <MapPin size={18} className="text-blue-500 mr-2" />
                {event.location}
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                {event.description}
              </p>
              <button className="bg-[#0033A0] text-white py-2 px-6 rounded-full font-medium hover:bg-blue-700 transition duration-300">
                Learn More
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View All Events Button */}
      <motion.div
        className="mt-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <button className="bg-[#0033A0] text-white py-3 px-10 rounded-full font-semibold text-lg hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300">
          View All Events
        </button>
      </motion.div>
    </section>
  );
}
