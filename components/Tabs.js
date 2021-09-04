
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
const tabs = props => {
  return (
    <Tabs>
      <div className="tablist-wrapper">
        <TabList>
          {props.children.map(child => {
            const label = child.props.label
            return (
              <Tab key={`tab-${child.props.label}`}>
                <div className="label-text">{label}</div>
              </Tab>
            )
          })}
        </TabList>
      </div>
      {props.children.map(child => (
        <TabPanel key={`panel-${child.props.label}`}>{child}</TabPanel>
      ))}
    </Tabs>
  )
}
export default tabs
