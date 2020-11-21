//import "./styles.css";
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import G6 from '@antv/g6';
// import Minimap from '@antv/g6/build/plugins.tool.minimap/';
// const Minimap = new G6.Minimap();

/* const Net = () => {
  const ref = React.useRef(null);
  let graph = null;

  useEffect(() => {
    if (!graph) {
      let data = {
        nodes: [
          {
            id: 'node1',
            x: 100,
            y: 100,
          },
          {
            id: 'node2',
            x: 200,
            y: 100,
          },
        ],
        edges: [
          {
            source: 'node1',
            target: 'node2',
          },
        ],
      };

      graph = new G6.Graph({
        container: ReactDOM.findDOMNode(ref.current),
        width: '100%',
        height: '100%',
        renderer: 'svg',
        modes: {
          default: ['zoom-canvas', 'drag-node', 'drag-canvas'],
        },
        minZoom: 0.5,
        maxZoom: 3,
      });
      graph.data(data);
      graph.render();
    }
  }, []);
  return (
    <div
      ref={ref}
      style={{ width: 1000, height: 1000, border: '1px solid #ccc' }}
    ></div>
  );
}; */

// export default Net;

export default class Net extends React.Component {
  componentDidMount() {
    var plugin = new G6.Minimap({
      container: 'minimap',
      width: 180,
      height: 120,
    });

    /* G6.registerEdge('flowingEdge', {
      afterDraw: function afterDraw(item) {
        var keyShape = item.getKeyShape();
        keyShape.attr('lineDash', [10, 10]);
        keyShape.attr('lineDashOffset', 0);
        keyShape.animate(
          {
            lineDashOffset: -20,
            repeat: true,
          },
          500
        );
      },
    }); */

    var data = {
      nodes: [
        {
          id: 'node1',
          x: 100,
          y: 200,
        },
        {
          id: 'node2',
          x: 300,
          y: 200,
        },
        {
          id: 'node3',
          x: 400,
          y: 300,
        },
        {
          id: 'node4',
          x: 400,
          y: 400,
        },
      ],
      edges: [
        {
          target: 'node2',
          source: 'node1',
        },
        {
          target: 'node3',
          source: 'node1',
        },
        {
          target: 'node3',
          source: 'node4',
        },
        {
          target: 'node1',
          source: 'node4',
          shape: 'flowingEdge',
        },
      ],
    };

    var graph = new G6.Graph({
      container: 'net',
      fitView: 'cc',
      width: 500,
      height: 500,
      plugins: [plugin],
    });
    graph.read(data);

    var node = void 0;
    var dx = void 0;
    var dy = void 0;

    graph.on('node:dragstart', function (ev) {
      var item = ev.item;

      var model = item.getModel();
      node = item;
      dx = model.x - ev.x;
      dy = model.y - ev.y;
    });
    graph.on('node:drag', function (ev) {
      node &&
        graph.update(node, {
          x: ev.x + dx,
          y: ev.y + dy,
        });
    });
    graph.on('node:dragend', function (ev) {
      node = undefined;
    });

    /* graph.behaviourOn('node:mouseenter', function (ev) {
      graph.update(ev.item, {
        color: 'red',
      });
    });

    graph.behaviourOn('node:mouseleave', function (ev) {
      graph.update(ev.item, {
        color: 'yellow',
      });
    });

    graph.behaviourOn('node:click', function (ev) {
      graph.focus(ev.item.id);
    }); */
  }
  render() {
    return [<div id="net" key="net" />, <div id="minimap" key="map" />];
  }
}

