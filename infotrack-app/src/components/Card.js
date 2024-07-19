import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

const HoverCard = styled(Card)(({ theme }) => ({
  position: 'relative',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.02)',
    '& .details': {
      display: 'block',
    },
  },
}));

const Details = styled(Box)(({ theme }) => ({
  display: 'none',
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  padding: theme.spacing(2),
  boxSizing: 'border-box',
  zIndex: 1,
  overflow: 'auto',
}));

const VehicleCard = ({ vehicle }) => {
  return (
    <Box sx={{ minWidth: 275, margin: 2 }}>
      <HoverCard variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Vehicle Information
          </Typography>
          <Typography variant="h5" component="div">
            {vehicle.VehicleNo}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Vehicle ID: {vehicle.VehicleId}
          </Typography>
          <Typography variant="body2">
            Client ID: {vehicle.ClientID}
            <br />
            Unit ID: {vehicle.UnitID}
            <br />
            {/* Basic info shown initially */}
          </Typography>
        </CardContent>
        <Details className="details">
          <Typography variant="body2">
            <strong>Vehicle Details:</strong>
            <br />
            <strong>Vehicle ID:</strong> {vehicle.VehicleId}
            <br />
            <strong>Client ID:</strong> {vehicle.ClientID}
            <br />
            <strong>Unit ID:</strong> {vehicle.UnitID}
            <br />
            <strong>Solution Type ID:</strong> {vehicle.SolutionTypeID}
            <br />
            <strong>Vehicle Type ID:</strong> {vehicle.VehicleTypeID}
            <br />
            <strong>Vehicle No:</strong> {vehicle.VehicleNo}
            <br />
            <strong>Vehicle Plate No:</strong> {vehicle.vehicleplateno}
            <br />
            <strong>Start Odometer:</strong> {vehicle.StartOdometer}
            <br />
            <strong>Vehicle Model:</strong> {vehicle.VehicleModel}
            <br />
            <strong>Vehicle Make:</strong> {vehicle.VehicleMake}
            <br />
            <strong>Driver ID:</strong> {vehicle.DriverId ?? 'N/A'}
            <br />
            <strong>Co-Driver ID:</strong> {vehicle.CoDriverId ?? 'N/A'}
            <br />
            <strong>Driver Vehicle Ass ID:</strong> {vehicle.DriverVehicleAssId ?? 'N/A'}
          </Typography>
        </Details>
      </HoverCard>
    </Box>
  );
};

export default VehicleCard;
