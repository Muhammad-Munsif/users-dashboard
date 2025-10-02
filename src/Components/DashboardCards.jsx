// src/components/DashboardCards.jsx
import React from 'react';
import StatCard from './StatCard';
import PromoCard from './PromoCard';
import { User, Globe, BarChart2, PieChart } from 'lucide-react'; // Example icons

const DashboardCards = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      {/* Grid for the top cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Stat Card 1 */}
        <StatCard
          icon={User}
          value="2455"
          label="User"
          description="Registrations"
          color="red" // Custom prop for icon background color
        />
        {/* Stat Card 2 */}
        <StatCard
          icon={Globe} // Using Globe as an example icon
          value="2455"
          label="User"
          description="Registrations"
          color="cyan"
        />
        {/* Stat Card 3 */}
        <StatCard
          icon={BarChart2} // Using BarChart2 as an example icon
          value="2455"
          label="User"
          description="Registrations"
          color="purple"
        />
        {/* Stat Card 4 */}
        <StatCard
          icon={PieChart} // Using PieChart as an example icon
          value="2455"
          label="User"
          description="Registrations"
          color="indigo"
        />
      </div>

      {/* Grid for the promo card (spans all columns on mobile, adjusts on tablet/desktop) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Promo Card */}
        <div className="lg:col-span-2"> {/* This makes it span 2 columns on large screens */}
          <PromoCard />
        </div>
      </div>
    </div>
  );
};

export default DashboardCards;