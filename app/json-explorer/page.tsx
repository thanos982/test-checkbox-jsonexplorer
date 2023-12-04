import { JsonExplorer } from '../../components/JsonExplorer'
import data from '../../data/jsonData.json'

export default function Page() {
  return <JsonExplorer data={data} />
}
