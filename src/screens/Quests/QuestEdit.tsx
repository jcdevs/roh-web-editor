import { Box, Button, Checkbox, Divider, FormControlLabel, FormLabel, Grid, TextField } from "@mui/material";
import { useCallback, useState } from "react";
import { useParams } from "react-router-dom";
import AutocompleteQuantity from "../../components/AutocompleteQuantity";
import { getMockQuestArray, getMockQuestIdentifierArray, Quest, QuestObjectIdentifier } from "../../data/interfaces/Quest";
import PrereqRow from "./PrereqRow";

enum QuestReqType {
  ROOM = 'roomsToVisit',
  MOB = 'mobsToKill',
  ITEM = 'itemsToGet'
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
    reqNum: 0,
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
const mockQuestIdentifierOptions = mockQuestIdentifiers.map((q, idx) => {
  return {
    label: `(${q.area}.${q.id}) Some Name ${idx}`,
    value: { area: q.area, id: q.id, reqNum: 0 }
  }
});

// const defaultValues: Quest = {
//   id: {
//     area: '',
//     id: 0,
//   },
//   repeatable: boolean;   NOTE: automatically set based on timesRepeatable and repeatFrequency
//   requirements: {
//     itemsToGet: [],
//     mobsToKill: [],
//     roomsToVisit: [],
//   },
//   turnInMob: {
//     area: '',
//     id: 0,
//     reqNum: 0,
//   },
//   rewards: {
//     alignmentChange: 0,
//     cashReward: [0, 0, 0, 0, 0],
//     expReward: 0,
//     itemRewards: []
//   },
//   revision: '',
// }

interface QuestEditProps {}

const QuestEdit = (props: QuestEditProps) => {
  const urlParams = useParams();
  const [formValues, setFormValues] = useState(defaultValues);

  const handleInputChange = useCallback(event => {
    const { name, value } = event.target;
    console.log(name, value);
    setFormValues(prev => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const handleCheckboxChange = useCallback(event => {
    const { name, checked } = event.target;
    console.log(name, checked);
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
    console.log(idx, val);
    const newPrereqs = [...formValues.preRequisites];

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

  const addRequirementRow = useCallback((type: QuestReqType) => {
    switch(type) {
      case QuestReqType.ROOM:
        setFormValues(prev => ({
          ...prev,
          requirements: {
            ...prev.requirements,
            roomsToVisit: [...prev.requirements.roomsToVisit, { area: '', id: 0, reqNum: 0 }],
          }
        }));
        break;
      case QuestReqType.MOB:
        setFormValues(prev => ({
          ...prev,
          requirements: {
            ...prev.requirements,
            mobsToKill: [...prev.requirements.mobsToKill, { area: '', id: 0, reqNum: 0 }],
          }
        }));
        break;
      case QuestReqType.ITEM:
        setFormValues(prev => ({
          ...prev,
          requirements: {
            ...prev.requirements,
            itemsToGet: [...prev.requirements.itemsToGet, { area: '', id: 0, reqNum: 0 }],
          }
        }));
        break;
      default:
    }
  }, []);

  const handleRequirementChange = useCallback((type: QuestReqType, idx: number, val?: QuestObjectIdentifier) => {
    const newReqs = [...formValues.requirements[type]];
    if (val) {
      newReqs[idx] = val;
    } else {
      newReqs.splice(idx, 1);
    }
    
    setFormValues(prev => ({
      ...prev,
      requirements: {
        ...prev.requirements,
        [type]: newReqs
      }
    }));
  }, [formValues.requirements]);

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
        <Grid container item spacing={1}>
          <Grid container item xs={12}>
            <Grid item xs={12}><Divider><FormLabel>Prerequisites</FormLabel></Divider></Grid>
          </Grid>
          <Grid container item spacing={1} xs={12}>
            {formValues.preRequisites.map((prereq, idx) => {
              console.log(idx, prereq);
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
              return (
                <Grid item xs={12} key={idx}>
                  <AutocompleteQuantity
                    label="Room"
                    quantityLabel="Amount"
                    options={mockQuestIdentifierOptions}
                    onChange={selection => handleRequirementChange(QuestReqType.ROOM, idx, selection)}
                    onRemove={() => handleRequirementChange(QuestReqType.ROOM, idx)}
                  />
                </Grid>
              );
            })}
            {formValues.requirements.mobsToKill.map((mob, idx) => {
              return (
                null
              );
            })}
            {formValues.requirements.itemsToGet.map((item, idx) => {
              return (
                null
              );
            })}
          </Grid>
          <Grid container item spacing={2} xs={12}>
            <Grid item xs={4}><Button onClick={() => addRequirementRow(QuestReqType.ROOM)} variant="contained" fullWidth>Add Room</Button></Grid>
            <Grid item xs={4}><Button onClick={() => addRequirementRow(QuestReqType.MOB)} variant="contained" fullWidth>Add Mob</Button></Grid>
            <Grid item xs={4}><Button onClick={() => addRequirementRow(QuestReqType.ITEM)} variant="contained" fullWidth>Add Item</Button></Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default QuestEdit;