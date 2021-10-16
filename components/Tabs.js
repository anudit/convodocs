
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { Ethereum, Near, Npm, Pnpm, Yarn } from './Icons'

const tabs = props => {
  return (
    <Tabs>
      <div className="tablist-wrapper">
        <TabList>
          {props.children.map(child => {
            const label = child.props.label
            let icon
            if (label.toLowerCase() === 'ethereum') icon = Ethereum
            if (label.toLowerCase() === 'near') icon = Near
            if (label.toLowerCase() === 'yarn') icon = Yarn
            if (label.toLowerCase() === 'npm') icon = Npm
            if (label.toLowerCase() === 'pnpm') icon = Pnpm
            return (
              <Tab key={`tab-${child.props.label}`}>
                <div className="label-icon">{icon}</div>
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
