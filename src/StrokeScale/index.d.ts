interface StrokeScale {
	ScaleGuiObject(object: UIStroke, pixels?: number, relativeSize?: number): { Disconnect: () => void };
	ScaleBillboardGui(
		billboardGui: BillboardGui,
		relativeSize: number,
	): {
		Disconnect: () => void;
		ChangeStrokeSize: (uiStroke: UIStroke, newThickness: number) => void;
		ChangeRelativeSize: (newRelativeSize: number) => void;
	};
}

declare const StrokeScale: StrokeScale;

export = StrokeScale;
