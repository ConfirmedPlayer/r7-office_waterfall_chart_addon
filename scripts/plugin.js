function update_chart(data_was, data_now)
{
	var green = "#68ba42";
	var red = "#cf174a";
	var data = {
		datasets: [
				{
					backgroundColor: "transparent",
					data: data_was
				},
				{
					fill: true,
					backgroundColor: [green, red, red, red, green, red, green, green, red, green, red, red],
					data: data_now
				}
		],
		labels: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"]
	};
	var options = {
		devicePixelRatio: 2,
		aspectRatio: 1,
		elements: {
			rectangle: {
				borderWidth: 0
			}
		},
		layout: {
			padding: 0
		},
		legend: {
			display: false
		},
		maintainAspectRatio: false,
		responsive: true,
		scales: {
			xAxes: [{
				gridLines: {
					display: false
				},
				scaleLabel: {
					display: true,
					labelString: "Месяцы"
				},
				stacked: true,
				ticks: {
					autoSkip: true,
					beginAtZero: true
				}
			}],
			yAxes: [{
				scaleLabel: {
					display: true,
					labelString: "Значение"
				},
				stacked: true,
				ticks: {
					beginAtZero: true
				}
			}]
		},
		title: {
			display: false
		},
		tooltips: {
			intersect: false,
			mode: "index",
			position: "nearest"
		}
	};
	var type = "bar";

	var ctx = document.getElementById("main_chart").getContext('2d');
	new Chart(ctx, {options, data, type});
}


(function (window, undefined)
{
    window.Asc.plugin.button = function (id)
	{
		if (id == 0)
		{
			var _info = window.Asc.plugin.info;
			var _method = (_info.objectId === undefined) ? 'AddOleObject' : 'EditOleObject';

			var canvas = document.getElementById('chart_frame').contentDocument.getElementById('main_chart');
			var data = canvas.toDataURL('image/png', 1);

			var _param = {
				guid : _info.guid,
				widthPix : (_info.mmToPx * _info.width) >> 0,
				heightPix : (_info.mmToPx * _info.height) >> 0,
				width : _info.width ? _info.width : 100,
				height : _info.height ? _info.height : 70,
				imgSrc : data,
				data : data,
				objectId : _info.objectId,
				resize : _info.resize
			};

			window.Asc.plugin.executeMethod(_method, [_param], function() {
				window.Asc.plugin.executeCommand('close', '');
			});
		}
		else
		{
			this.executeCommand('close', '');
		}
    };

})(window, undefined);