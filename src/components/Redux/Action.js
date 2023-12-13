export const UPDATE_STATUS = 'UPDATE_STATUS';

export const updateStatus = (itemId, newStatus) => ({
  type: UPDATE_STATUS,
  payload: { itemId, newStatus },
});
