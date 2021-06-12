import ReactDOM from "react-dom";
import "./styles.css";
import { useVirtual } from "react-virtual";

function GridVirtualizerFixed() {
  const parentRef = React.useRef();

  const rowVirtualizer = useVirtual({
    size: 10,
    parentRef,
    estimateSize: React.useCallback(() => 35, []),
    overscan: 5
  });

  const columnVirtualizer = useVirtual({
    horizontal: true,
    size: 3,
    parentRef,
    estimateSize: React.useCallback(() => 100, []),
    overscan: 5
  });