import { SizeTableType } from "./types";

export default function Table(props: { data: SizeTableType }) {
  return (
    <table className="mt-6 w-full">
      <thead>
        <tr className="text-left">
          <th className="border-2 p-2" colSpan={2}>
            United States
          </th>
          <th className="border-2 p-2">UK</th>
          <th className="border-2 p-2">Europe</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((val, key) => {
          return (
            <tr key={key} className="border-2">
              <td className="border-2 p-2">{val.us}</td>
              <td className="border-2 p-2 capitalize">{val.us_text}</td>
              <td className="border-2 p-2">{val.uk}</td>
              <td className="border-2 p-2">{val.europe}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
