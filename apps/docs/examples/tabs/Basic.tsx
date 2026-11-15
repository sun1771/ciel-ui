import { TabBar, TabItem } from '@acme/ui'
import { Bed, Car, Trip } from '@acme/icons'

export default function Basic() {
  return (
    <TabBar aria-label="Search type" defaultValue="stays">
      <TabItem value="stays" icon={<Bed size={20} />}>
        Stays
      </TabItem>
      <TabItem value="flights" icon={<Trip size={20} />}>
        Flights
      </TabItem>
      <TabItem value="cars" icon={<Car size={20} />}>
        Cars
      </TabItem>
    </TabBar>
  )
}
