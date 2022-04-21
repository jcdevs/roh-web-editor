import { Autocomplete, Box, Button, Checkbox, Divider, FormControlLabel, FormLabel, Grid, TextField } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { Quest } from "../../data/interfaces/Quest";
import { getMockQuestArray, getMockQuestIdentifierArray } from "../../data/mock-utils";
import PrereqRow from "./PrereqRow";
import SelectWithAmount, { Creature, Item, Room } from "./SelectWithAmount";

enum QuestInputRowType {
  ROOM_REQ = 'roomsToVisit',
  MOB_REQ = 'mobsToKill',
  ITEM_REQ = 'itemsToGet',
  ITEM_REWARD = 'itemRewards',
}

const defaultValues: Quest = {
  id: {
    area: '',
    id: 0,
  },
  name: '',
  description: '',
  preRequisites: [],
  level: 0,
  minLevel: 0,
  minFaction: 0,
  receiveString: '',
  requirements: {
    itemsToGet: [],
    mobsToKill: [],
    roomsToVisit: [],
  },
  turnInMob: {
    area: '',
    id: 0,
  },
  completionString: '',
  rewards: {
    alignmentChange: 0,
    cashReward: [0, 0, 0, 0, 0],
    expReward: 0,
    itemRewards: []
  },
  timesRepeatable: 0,
  repeatFrequency: 0,
  sharable: false,
  revision: '',
}

const mockPrereqs = getMockQuestArray(10);
const mockQuestIdentifiers = getMockQuestIdentifierArray(10);

//   repeatable: boolean;   TODO: automatically set based on timesRepeatable and repeatFrequency
//   revision: string;      NOTE: did nothing with this

interface QuestEditProps {}

const QuestEdit = (props: QuestEditProps) => {
  const [formValues, setFormValues] = useState(defaultValues);

  useEffect(() => {
    console.log(formValues);
  }, [formValues]);

  const handleInputChange = useCallback(event => {
    const { name, value } = event.target;
    switch(name) {
      case 'alignmentChange':
      case 'expReward':
        setFormValues(prev => ({
            ...prev,
            rewards: {
              ...prev.rewards,
              [name]: value,
            }
        }));
        break;
      case 'cashReward':
        setFormValues(prev => ({
            ...prev,
            rewards: {
              ...prev.rewards,
              [name]: [0, 0, value, 0, 0],
            }
        }));
        break;
      default:
        setFormValues(prev => ({
          ...prev,
          [name]: value,
        }));
    }
  }, []);

  const handleCheckboxChange = useCallback(event => {
    const { name, checked } = event.target;
    setFormValues(prev => ({
      ...prev,
      [name]: checked,
    }));
  }, []);

  const addPrereqRow = useCallback(() => {
    setFormValues(prev => ({
      ...prev,
      preRequisites: [...prev.preRequisites, { area: '', id: 0 }],
    }));
  }, []);

  const handlePrereqChange = useCallback((idx: number, val?: Quest) => {
    let newPrereqs = [...formValues.preRequisites];

    if (val) {
      newPrereqs[idx] = { area: val.id.area, id: val.id.id };
    } else {
      //newPrereqs.splice(idx, 1);
      // workaround because splice results in another element acquiring the index,
      // which means the list of Autocomplete does not know how to rerender properly.
      // Note this will make the array grow continuously as long as the user is adding and removing rows.
      newPrereqs[idx] = undefined;
    }
    
    setFormValues(prev => ({
      ...prev,
      preRequisites: newPrereqs,
    }));
  }, [formValues.preRequisites]);

  const addSelectWithAmountRow = useCallback((type: QuestInputRowType) => {
    switch(type) {
      case QuestInputRowType.ROOM_REQ:
        setFormValues(prev => ({
          ...prev,
          requirements: {
            ...prev.requirements,
            roomsToVisit: [...prev.requirements.roomsToVisit, { area: '', id: 0, reqNum: 0 }],
          }
        }));
        break;
      case QuestInputRowType.MOB_REQ:
        setFormValues(prev => ({
          ...prev,
          requirements: {
            ...prev.requirements,
            mobsToKill: [...prev.requirements.mobsToKill, { area: '', id: 0, reqNum: 0 }],
          }
        }));
        break;
      case QuestInputRowType.ITEM_REQ:
        setFormValues(prev => ({
          ...prev,
          requirements: {
            ...prev.requirements,
            itemsToGet: [...prev.requirements.itemsToGet, { area: '', id: 0, reqNum: 0 }],
          }
        }));
        break;
      case QuestInputRowType.ITEM_REWARD:
        setFormValues(prev => ({
          ...prev,
          rewards: {
            ...prev.rewards,
            itemRewards: [...prev.rewards.itemRewards, { area: '', id: 0, reqNum: 0 }],
          }
        }));
        break;
      default:
    }
  }, []);

  const handleSelectWithAmountChange = useCallback((type: QuestInputRowType, idx: number, amount: number, val?: Room | Creature | Item) => {
    const isReward = type === QuestInputRowType.ITEM_REWARD;
    const newValues = isReward ? [...formValues.rewards.itemRewards] : [...formValues.requirements[type]];

    if (val) {
      newValues[idx] = { area: val.area, id: val.id, reqNum: amount };
    } else {
      //newReqs.splice(idx, 1);
      // workaround because splice results in another element acquiring the index,
      // which means the list of Autocomplete does not know how to rerender properly.
      // Note this will make the array grow continuously as long as the user is adding and removing rows.
      newValues[idx] = undefined;
    }

    if (isReward) {
      setFormValues(prev => ({
        ...prev,
        rewards: {
          ...prev.rewards,
          [type]: newValues
        }
      }));
    } else {
      setFormValues(prev => ({
        ...prev,
        requirements: {
          ...prev.requirements,
          [type]: newValues
        }
      }));
    }
  }, [formValues.requirements, formValues.rewards.itemRewards]);

  const handleTurninChange = useCallback((event, selection) => {
    setFormValues(prev => ({
      ...prev,
      turnInMob: selection,
    }));
  }, []);

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid container item xs={6} direction="column" spacing={2}>
          <Grid item>
            <TextField label="Name" value={formValues.name} onChange={handleInputChange} fullWidth required name="name" type="text"/>
          </Grid>
          <Grid item>
            <TextField label="Receive String" value={formValues.receiveString} onChange={handleInputChange} fullWidth required name="receiveString" type="text"/>
          </Grid>
          <Grid item>
            <TextField label="Completion String" value={formValues.completionString} onChange={handleInputChange} fullWidth required name="completionString" type="text"/>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <TextField label="Description" value={formValues.description} onChange={handleInputChange} fullWidth multiline rows={7.2} required name="description" type="text"/>
        </Grid>
        <Grid container item spacing={2}>
          <Grid item xs={4} md={2}>
            <TextField label="Level" value={formValues.level} onChange={handleInputChange} fullWidth name="level" type="number" />
          </Grid>
          <Grid item xs={4} md={2}>
            <TextField label="Min. Level" value={formValues.minLevel} onChange={handleInputChange} fullWidth name="minLevel" type="number" />
          </Grid>
          <Grid item xs={4} md={2}>
            <TextField label="Min. Faction" value={formValues.minFaction} onChange={handleInputChange} fullWidth name="minFaction" type="number" />
          </Grid>
          <Grid item xs={4} md={2}>
            <TextField label="Times Repeatable" value={formValues.timesRepeatable} onChange={handleInputChange} fullWidth name="timesRepeatable" type="number" />
          </Grid>
          <Grid item xs={4} md={2}>
            <TextField label="Repeat Frequency" value={formValues.repeatFrequency} onChange={handleInputChange} fullWidth name="repeatFrequency" type="number" />
          </Grid>
          <Grid container item xs={4} md={2} alignItems="center">
            <FormControlLabel label="Sharable" control={<Checkbox />} onChange={handleCheckboxChange} labelPlacement="start" name="sharable" />
          </Grid>
        </Grid>
        <Grid container item>
            <Autocomplete
              options={mockQuestIdentifiers}
              getOptionLabel={opt => opt ? `(${opt.area}.${opt.id}) Some Name` : ''}
              onChange={handleTurninChange}
              renderInput={params => (
                <TextField
                  {...params}
                  label="Turnin Mob"
                  InputProps={{
                    ...params.InputProps,
                    type: 'search',
                  }}
                  required
                />
              )}
              fullWidth
              disableClearable
              clearOnBlur
            />
        </Grid>
        <Grid container item spacing={1}>
          <Grid container item xs={12}>
            <Grid item xs={12}><Divider><FormLabel>Rewards</FormLabel></Divider></Grid>
          </Grid>
          <Grid container item xs={12} spacing={2}>
            <Grid item xs={4}>
              <TextField label="Alignment" value={formValues.rewards.alignmentChange} onChange={handleInputChange} fullWidth required name="alignmentChange" type="number"/>
            </Grid>
            <Grid item xs={4}>
              <TextField label="Exp" value={formValues.rewards.expReward} onChange={handleInputChange} fullWidth required name="expReward" type="number"/>
            </Grid>
            <Grid item xs={4}>
              <TextField label="Gold" value={formValues.rewards.cashReward[2]} onChange={handleInputChange} fullWidth required name="cashReward" type="number"/>
            </Grid>
            <Grid container item spacing={1} xs={12}>
              {formValues.rewards.itemRewards.map((item, idx) => {
                if (item) {
                  return (
                    <Grid item xs={12} key={idx}>
                      <SelectWithAmount
                        label="Item Reward"
                        quantityLabel="Amount"
                        options={mockQuestIdentifiers}
                        onChange={(selection: Item | undefined, amount: number) => handleSelectWithAmountChange(QuestInputRowType.ITEM_REWARD, idx, amount, selection)}
                        onRemove={() => handleSelectWithAmountChange(QuestInputRowType.ITEM_REWARD, idx, 0)}
                      />
                    </Grid>
                  );
                }
                return null;
              })}
            </Grid>
            <Grid item xs={12}>
              <Button onClick={() => addSelectWithAmountRow(QuestInputRowType.ITEM_REWARD)} variant="contained" fullWidth>Add Item Reward</Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid container item spacing={1}>
          <Grid container item xs={12}>
            <Grid item xs={12}><Divider><FormLabel>Prerequisites</FormLabel></Divider></Grid>
          </Grid>
          <Grid container item spacing={1} xs={12}>
            {formValues.preRequisites.map((prereq, idx) => {
              if (prereq) {
                return (
                  <Grid item xs={12} key={idx}>
                    <PrereqRow
                      options={mockPrereqs}
                      onChange={selection => handlePrereqChange(idx, selection)}
                      onRemove={() => handlePrereqChange(idx)}/>
                  </Grid>
                );
              }
              return null;
            })}
            <Grid item xs={12}>
              <Button onClick={addPrereqRow} variant="contained" fullWidth>Add Prerequisite</Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid container item spacing={1}>
          <Grid container item xs={12}>
            <Grid item xs={12}><Divider><FormLabel>Requirements</FormLabel></Divider></Grid>
          </Grid>
          <Grid container item spacing={1} xs={12}>
            {formValues.requirements.roomsToVisit.map((room, idx) => {
              if (room) {
                return (
                  <Grid item xs={12} key={idx}>
                    <SelectWithAmount
                      label="Room"
                      quantityLabel="Amount"
                      options={mockQuestIdentifiers}
                      onChange={(selection: Room | undefined, amount: number) => handleSelectWithAmountChange(QuestInputRowType.ROOM_REQ, idx, amount, selection)}
                      onRemove={() => handleSelectWithAmountChange(QuestInputRowType.ROOM_REQ, idx, 0)}
                    />
                  </Grid>
                );
              }
              return null;
            })}
            {formValues.requirements.mobsToKill.map((mob, idx) => {
              if (mob) {
                return (
                  <Grid item xs={12} key={idx}>
                    <SelectWithAmount
                      label="Mob"
                      quantityLabel="Amount"
                      options={mockQuestIdentifiers}
                      onChange={(selection: Creature | undefined, amount: number) => handleSelectWithAmountChange(QuestInputRowType.MOB_REQ, idx, amount, selection)}
                      onRemove={() => handleSelectWithAmountChange(QuestInputRowType.MOB_REQ, idx, 0)}
                    />
                  </Grid>
                );
              }
              return null;
            })}
            {formValues.requirements.itemsToGet.map((item, idx) => {
              if (item) {
                return (
                  <Grid item xs={12} key={idx}>
                    <SelectWithAmount
                      label="Item"
                      quantityLabel="Amount"
                      options={mockQuestIdentifiers}
                      onChange={(selection: Item | undefined, amount: number) => handleSelectWithAmountChange(QuestInputRowType.ITEM_REQ, idx, amount, selection)}
                      onRemove={() => handleSelectWithAmountChange(QuestInputRowType.ITEM_REQ, idx, 0)}
                    />
                  </Grid>
                );
              }
              return null;
            })}
          </Grid>
          <Grid container item spacing={2} xs={12}>
            <Grid item xs={4}><Button onClick={() => addSelectWithAmountRow(QuestInputRowType.ROOM_REQ)} variant="contained" fullWidth>Add Room</Button></Grid>
            <Grid item xs={4}><Button onClick={() => addSelectWithAmountRow(QuestInputRowType.MOB_REQ)} variant="contained" fullWidth>Add Mob</Button></Grid>
            <Grid item xs={4}><Button onClick={() => addSelectWithAmountRow(QuestInputRowType.ITEM_REQ)} variant="contained" fullWidth>Add Item</Button></Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default QuestEdit;