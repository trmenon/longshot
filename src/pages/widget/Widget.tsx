import React, {useState, useEffect} from 'react';

// Assets Imports
import { FlagUsIcon, FillSpotIcon } from '../../components/icons';

// Data Imports
import { data } from '../../config/data';

// Legacy Imports
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

// Component Imports
import { CustomCard } from '../../components/custom-card/CustomCard';
import { IntentChip } from '../../components/intent-chip/IntentChip';

// Utility Module Imports
import { 
    getSelectedVolume,
    getKeywordDifficultySpecificDetails,
    getIntentSpecificDetails, 
    getResults,
    getComp,
    getCpc
} from '../../utilz';

// Types
import { SelectedDataProps} from '../../types';
interface TableCellProps {
    key: string;
    mapping_key: string;
    value: string;
}
interface TableRowProps {
    key: string;
    row: TableCellProps[];
}
interface TableDataProps {
    type: string;
    data: TableRowProps[];
}

export const WidgetComponent = ()=> {
    // State
    const [feature, setFeature] = useState('raw_broadmatch_data'); //Used to handle type of data in table
    const [content, setContent] = useState<TableDataProps | any>([]);
    const [selected, setSelected] = useState('');
    const [selectedData, setSelectedData] = useState<SelectedDataProps>({
        volume: '',
        keyword_rating: '',
        keyword_text: '',
        keyword_color: '',
        keyword_value: '',
        intent_value: '',
        intent_color: '',
        intent_hover_color: '',
        intent_bg_color: '',
        results: '',
        cpc: '',
        comp: '',
    })

    // Effects
    useEffect(()=> {setFeature('raw_broadmatch_data')}, []);
    useEffect(()=> {
        try{
            const table_data = data?.data_set.find((item)=> item?.type === feature);
            setContent(table_data);
        }catch(err) {
            console.log('[ERROR] Updating table data');
            console.log(err);
        }
    }, [feature]);
    useEffect(()=> {
        try{
            if(content?.data && Array.isArray(content?.data) && content?.data.length > 0) {
                setSelected(content?.data[0]?.key);
            }
        }catch(err) {
            console.log('[ERROR] Marking first row as selected');
            console.log(err);
        }
    }, [content]);
    useEffect(()=> {
        try{
            if(selected !== '') {
                setSelectedData({
                    volume: getSelectedVolume(selected, feature) || '',
                    keyword_rating: getKeywordDifficultySpecificDetails(selected, feature, 'rating') || '',
                    keyword_text: getKeywordDifficultySpecificDetails(selected, feature, 'text') || '',
                    keyword_color: getKeywordDifficultySpecificDetails(selected, feature, 'color') || '',
                    keyword_value: getKeywordDifficultySpecificDetails(selected, feature, 'value') || '',
                    intent_value: getIntentSpecificDetails(selected, feature, 'value') || '',
                    intent_color: getIntentSpecificDetails(selected, feature, 'color') || '',
                    intent_hover_color: getIntentSpecificDetails(selected, feature, 'hover_color') || '',
                    intent_bg_color: getIntentSpecificDetails(selected, feature, 'bg_color') || '',
                    results: getResults(selected, feature) || '',
                    cpc: getCpc(selected, feature) || '',
                    comp: getComp(selected, feature) || '',
                })
            }
        }catch(err) {
            console.log('[ERROR] Row Select Effect');
            console.log(err);
        }
    }, [selected])

    // Tracker
    // useEffect(()=> {console.log(content)}, [content])

    // Event Handlers
    const handleFeatureChange = (
        event: React.MouseEvent<HTMLElement>,
        newFeature: string,
      ) => {
        setFeature(newFeature)
    };
    const handleSelectRow = (row_key: string)=> setSelected(row_key);

    // Renderer
    return(
        <React.Fragment>
            <Box sx={{width: '100%'}}>
                {/* Header */}
                <Box
                    sx={{
                        width: '100%',
                        px: '24px',
                        py: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        mt: '32px'
                    }}
                >
                    <Stack spacing={'20px'}>
                        <Box>
                            <Breadcrumbs separator="›" aria-label="breadcrumb">
                                <Link 
                                    underline="hover" 
                                    color="inherit" 
                                    href="/"
                                    sx={{
                                        color: '#b4b3b1',
                                        fontSize: '14px',
                                        '&: hover': {color: '#616469',}
                                    }}
                                >
                                    Keyword Explorer
                                </Link>
                                <Typography
                                    sx={{
                                        color: '#616469',
                                        fontSize: '14px'
                                    }}
                                >
                                    Keyword Overview
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box>
                            <Stack spacing={'4px'} sx={{textAlign: 'left'}}>
                                <Stack spacing={'4px'} direction={'row'}>
                                    <Typography sx={{color: '#202021',fontSize: '14px', fontWeight: 700}}>
                                        Keyword:
                                    </Typography>
                                    <Typography sx={{color: '#808080',fontSize: '14px', fontWeight: 700}}>
                                        shopping in barcelona
                                    </Typography>
                                </Stack>
                                <Stack spacing={'4px'} direction={'row'} sx={{display: 'flex', alignItems: 'center'}}>
                                    <Typography sx={{color: '#728d81',fontSize: '14px'}}>
                                        Keyword Overview: United States
                                    </Typography>
                                    <FlagUsIcon/>
                                </Stack>
                            </Stack>
                        </Box>
                    </Stack>
                </Box>
                <Divider variant='middle'/>
                {/* Card and Button Section */}
                <Box sx={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Box sx={{px: '12px', width: {xs: '100%', sm: '85%', md: '70', lg: '60%'}}}>
                        <Grid container spacing={2} sx={{mt: '24px'}}>
                            <Grid item xs={12} md={6}>
                                <CustomCard width={'100%'}>
                                    <Stack spacing={'24px'} sx={{textAlign: 'left'}}>
                                        <Stack spacing={'12px'}>
                                            <Typography sx={{color: '#2e2a28',fontSize: '14px',}}>
                                                Volume
                                            </Typography>
                                            <Stack spacing={'4px'} direction={'row'}>
                                                <Typography sx={{color: '#232221',fontSize: '14px',fontWeight: 600}}>
                                                    {selectedData?.volume}
                                                </Typography>
                                                <FlagUsIcon/>
                                            </Stack>
                                        </Stack>
                                        <Divider/>
                                        <Stack spacing={'12px'}>
                                            <Typography sx={{color: '#2e2a28',fontSize: '14px',}}>
                                                Keyword Difficulty
                                            </Typography>
                                            <Stack spacing={'4px'} direction={'row'}>
                                                <Stack spacing={'4px'}>
                                                    <Typography sx={{color: '#232221',fontSize: '14px',fontWeight: 600}}>
                                                        {`${selectedData?.keyword_value}%`}
                                                    </Typography>
                                                    <Typography sx={{color: '#2e2a28',fontSize: '14px',}}>
                                                        {selectedData?.keyword_rating}
                                                    </Typography>
                                                </Stack>
                                                <CircularProgress 
                                                    variant="determinate" 
                                                    value={Number(selectedData?.keyword_value)} 
                                                    sx={{color: selectedData?.keyword_color, }}
                                                />
                                            </Stack>
                                            <Typography sx={{color: '#2e2a28',fontSize: '12px',}}>
                                                {selectedData?.keyword_text}
                                            </Typography>
                                        </Stack>
                                    </Stack>                                    
                                </CustomCard>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Stack spacing={'8px'}>
                                    <CustomCard width={'100%'}>
                                        <Stack 
                                            spacing={'4px'} 
                                            sx={{display: 'flex', justifyContent: 'flex-start', textAlign: 'left'}}
                                        >
                                            <Typography sx={{color: '#2e2a28',fontSize: '14px',}}>
                                                Intent
                                            </Typography>
                                            <IntentChip 
                                                variant = {'full'}
                                                value = {Number(selectedData?.intent_value)}
                                            />
                                        </Stack>
                                    </CustomCard>
                                    <CustomCard width={'100%'}>
                                        <Stack 
                                            spacing={'4px'} 
                                            sx={{display: 'flex', justifyContent: 'flex-start', textAlign: 'left'}}
                                        >
                                            <Typography sx={{color: '#2e2a28',fontSize: '14px',}}>
                                                Results
                                            </Typography>
                                            <Typography sx={{color: '#232221',fontSize: '14px',fontWeight: 600}}>
                                                {selectedData?.results}
                                            </Typography>
                                        </Stack>
                                    </CustomCard>
                                    <CustomCard width={'100%'}>
                                        <Grid container spacing={2} sx={{textAlign: 'left'}}>
                                            <Grid item xs={6} sx={{display: 'flex', justifyContent: 'space-between'}}>
                                                <Stack spacing={'4px'}>
                                                    <Typography sx={{color: '#2e2a28',fontSize: '14px',}}>
                                                        CPC
                                                    </Typography>
                                                    <Typography sx={{color: '#232221',fontSize: '14px',fontWeight: 600}}>
                                                        {selectedData?.cpc}
                                                    </Typography>
                                                </Stack>
                                                <Stack spacing={'4px'}>
                                                    <Typography sx={{color: '#2e2a28',fontSize: '14px',}}>
                                                        Com.
                                                    </Typography>
                                                    <Typography sx={{color: '#232221',fontSize: '14px',fontWeight: 600}}>
                                                        {selectedData?.comp}
                                                    </Typography>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    </CustomCard>
                                </Stack>
                            </Grid>
                        </Grid>                        
                    </Box>                    
                </Box>
                {/* Button Section */}
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        mt: '24px',
                        width: '100%',
                        px: {xs: '8px', sm: '12px', md: '24px', lg: '32px'}
                    }}
                >
                    <ToggleButtonGroup
                        color="primary"
                        value={feature}
                        exclusive
                        onChange={handleFeatureChange}
                    >
                        <ToggleButton value="raw_broadmatch_data" size={'small'}>Broad match</ToggleButton>
                        <ToggleButton value="raw_related_data" size={'small'}>Related</ToggleButton>
                        <ToggleButton value="raw_question_data" size={'small'}>Questions</ToggleButton>
                    </ToggleButtonGroup>
                    <button 
                        className="rich-btn" 
                        // onClick={openModal}
                    >
                        Add to List
                    </button>
                </Box>
                {/* Table Section */}
                <Box 
                    sx={{
                        width: '100%', 
                        px: {xs: '8px', sm: '12px', md: '24px', lg: '32px'}, 
                        mt: '32px', 
                        mb: '64px'
                    }}
                >
                    <TableContainer 
                        sx={{
                            border: '1px solid #CCC', 
                            mb: '32px', 
                            backgroundColor: '#f9fafc', 
                            padding: 0,
                            borderRadius: '24px',
                            overflow: 'scroll',
                            '&:: -webkit-scrollbar': {display: 'none'}
                        }}
                    >
                        <Table sx={{ width: '100%' }}>
                            <TableHead>
                                <TableRow>
                                    {
                                        data?.headers
                                        .filter(element=> element?.show === true)
                                        .map((header)=> {
                                            return(
                                                <TableCell 
                                                    key={header?.key}
                                                    align="left"
                                                    sx={{
                                                        color: '#7b7680',
                                                        fontSize: '14px'
                                                    }}
                                                >
                                                    {header?.label}
                                                </TableCell>
                                            )
                                        })
                                    }
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    content?.data && content?.data.length > 0?
                                        content?.data.map((row: TableRowProps)=> {
                                            return(
                                                <TableRow 
                                                    key={row.key}
                                                    selected = {row?.key === selected}
                                                    sx={{'&:hover': {cursor: 'pointer'}}}
                                                    onClick={()=> handleSelectRow(row?.key)}
                                                >
                                                    {
                                                        row.row.map((cell: TableCellProps, index: number)=> {
                                                            return(
                                                                <TableCell 
                                                                    key={cell.key}
                                                                    align="left"
                                                                    sx={{
                                                                        color: '#4a3c35',
                                                                        fontSize: '14px',
                                                                        fontWeight: 600
                                                                    }}
                                                                >
                                                                    {
                                                                        cell?.mapping_key === 'number_of_results'?
                                                                            `${Number(cell.value)/1000000}M`
                                                                            :
                                                                        cell?.mapping_key === 'keyword_difficulty'?
                                                                            <Stack spacing={'4px'} direction={'row'}>
                                                                                <Typography
                                                                                    sx={{
                                                                                        color: '#4a3c35',
                                                                                        fontSize: '14px',
                                                                                        fontWeight: 600
                                                                                    }}
                                                                                >
                                                                                    {cell.value}
                                                                                </Typography>
                                                                                <FillSpotIcon fillValue={Number(cell.value)}/>
                                                                            </Stack>                                                                            
                                                                            :
                                                                        cell?.mapping_key === 'intent'?
                                                                            <IntentChip
                                                                                value={Number(cell.value)}
                                                                                variant='small'
                                                                            />
                                                                            :
                                                                            cell.value
                                                                    }
                                                                </TableCell>
                                                            )
                                                        })
                                                    }
                                                </TableRow>
                                            )
                                        })
                                        :
                                        <TableRow
                                            key={'no-data-render-key'}
                                            sx={{ width: '100%' }}
                                        >
                                            <TableCell component="th" scope="row" colSpan={8}>
                                                <Alert severity="info">
                                                    <AlertTitle>Info</AlertTitle>
                                                    <strong>No data present</strong>
                                                </Alert>
                                            </TableCell>
                                        </TableRow>
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>                    
                </Box>
                <Divider variant={'fullWidth'}/>
            </Box>
        </React.Fragment>
    )
}