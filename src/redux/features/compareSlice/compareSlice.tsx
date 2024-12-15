import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "@/interface/product.interface";
import { toast } from "sonner";

interface ComparisonState {
  selectedProducts: IProduct[];
}

const initialState: ComparisonState = {
  selectedProducts: [],
};

const compareSlice = createSlice({
  name: "compareSlice",
  initialState,
  reducers: {
    addProductToComparison: (state, action: PayloadAction<IProduct>) => {
      const { productId, categoryId } = action.payload;

      const isSameCategory =
        state.selectedProducts.length === 0 ||
        state.selectedProducts.every(
          (product) => product.categoryId === categoryId
        );

      const isAlreadySelected = state.selectedProducts.some(
        (product) => product.productId === productId
      );

      if (!isSameCategory) {
        toast.error("You can only compare products from the same category.");
      } else if (isAlreadySelected) {
        toast.error("This product is already in the comparison list.");
      } else if (state.selectedProducts.length >= 3) {
        toast.error("You can only compare up to 3 products.");
      } else {
        state.selectedProducts.push(action.payload);
        toast.success(`${action.payload.name} added to comparison.`);
      }
    },
    removeProductFromComparison: (state, action: PayloadAction<string>) => {
      const productIdToRemove = action.payload;
      const product = state.selectedProducts.find(
        (product) => product.productId === productIdToRemove
      );

      if (product) {
        state.selectedProducts = state.selectedProducts.filter(
          (product) => product.productId !== productIdToRemove
        );
        toast.success(`${product.name} removed from comparison.`);
      }
    },
    clearComparison: (state) => {
      state.selectedProducts = [];
      toast.success("Comparison list cleared.");
    },
  },
});

export const {
  addProductToComparison,
  removeProductFromComparison,
  clearComparison,
} = compareSlice.actions;
export default compareSlice.reducer; // Ensure the reducer is exported
